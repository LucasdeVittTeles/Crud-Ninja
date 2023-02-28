const User = require("../models/user_model");
const bcrypt = require("bcrypt");

module.exports = {
  async criarUsuario(req, res) {
    try {
      const usuarioExiste = await User.findOne({
        where: { userName: req.body.userName },
      });

      if (usuarioExiste) {
        console.log("User already exists.");
        return;
      }

      const salt = await bcrypt.genSalt(12);
      const senhaCriptografada = await bcrypt.hash(req.body.password, salt);

      const usuario = {
        userName: req.body.userName,
        password: senhaCriptografada,
      };

      const criandoUsuario = await User.create(usuario);
      usuario.password = undefined;

      return res.json({ msg: "Succesfully created user." });
    } catch (error) {
      console.log(error);
    }
  },

  async autenticacaoUsuario(req, res) {

    
  },
};
