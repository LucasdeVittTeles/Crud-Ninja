const Ninja = require("../models/ninja_model");

module.exports = {
  async buscarNinjas(req, res) {
    try {
      const ninjas = await Ninja.findAll();
      return res.json(ninjas);
    } catch (erro) {
      console.log("Erro ao tentar listar ninjas: " + erro);
    }
  },

  async buscarPorId(req, res) {
    try {
      const ninja = await Ninja.findOne({ where: { id: req.params.id } });
      return res.json(ninja);
    } catch (erro) {
      console.log("Erro ao tentar listar ninjas: " + erro);
    }
  },

  async cadastro(req, res) {
    try {
      const { nome, idade, claNinja, numeroMissoes, ranking } = req.body;

      if (idade < 0 || numeroMissoes < 0) {
        return res.status(400).json({
          msg: "Os campos com valores numericos devem ser preenchidos com numeros positivos.",
        });
      }

      await Ninja.create({
        nome,
        idade,
        claNinja,
        numeroMissoes,
        ranking,
      });

      return res.status(200).json({ msg: "Ninja cadastrado com sucesso!" });
    } catch (erro) {
      return res
        .status(500)
        .json({ msg: "Erro ao tentar cadastrar ninja: " + erro });
    }
  },

  async deletarNinja(req, res) {
    try {
      await Ninja.destroy({
        where: {
          id: req.params.id,
        },
      });
      return res.status(200).json({ msg: "Ninja Deletado com sucesso!" });
    } catch (erro) {
      return res
        .status(500)
        .json({ msg: "Erro ao tentar deletar ninja: " + erro });
    }
  },

  async editarNinja(req, res) {
    const data = req.body;

    try {
      if (data.idade < 0 || data.numeroMissoes < 0) {
        return res.status(400).json({
          msg: "Os campos com valores numericos devem ser preenchidos com numeros positivos.",
        });
      }

      await Ninja.update(
        {
          nome: data.nome,
          idade: data.idade,
          claNinja: data.claNinja,
          numeroMissoes: data.numeroMissoes,
          ranking: data.ranking,
        },
        {
          where: { id: req.params.id },
        }
      );
      return res.status(200).json({ msg: "Ninja Editado com sucesso!" });
    } catch (erro) {
      return res.status(500).json({ msg: "Erro ao tentar editar ninja: " + erro });
    }
  },
};
