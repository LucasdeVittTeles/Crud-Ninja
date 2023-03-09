const User = require("../models/user_model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  async criarUsuario(req, res) {
    try {
      const user = req.body.userName;
      const pass = req.body.password;

      if (user.length || pass.length) {
        return res
          .status(400)
          .json({ msg: "Ambos os campos devem ter mais de 6 caracteres." });
      }

      const usuarioExiste = await User.findOne({
        where: { userName: req.body.userName },
      });

      if (usuarioExiste) {
        console.log("Esse usario ja existe.");
        return;
      }

      const salt = await bcrypt.genSalt(12);
      const senhaCriptografada = await bcrypt.hash(req.body.password, salt);

      const usuario = {
        userName: req.body.userName,
        password: senhaCriptografada,
      };

      await User.create(usuario);
      usuario.password = undefined;

      return res.status(200).json({ msg: "Usuario criado com sucesso." });
    } catch (error) {
      return res
        .status(500)
        .json({ msg: "Erro ao tentar cadastrar usuario: " + error });
    }
  },

  async autenticacaoUsuario(req, res) {
    try {
      const usuario = await User.findOne({
        where: { userName: req.body.userName },
      });

      if (!usuario) {
        return res.status(404).json({ msg: "User hot found." });
      }

      const validarSenha = await bcrypt.compare(
        req.body.password,
        usuario.password
      );

      if (!validarSenha) {
        return res.status(404).json({ msg: "Invalid password." });
      }

      const secret = process.env.SECRET;

      const token = jwt.sign({ userId: usuario.id }, secret, {
        expiresIn: 600,
      });

      return res
        .status(200)
        .json({ token, msg: "Successfully authenticated." });
    } catch (error) {
      console.log(error);
    }
  },
};
