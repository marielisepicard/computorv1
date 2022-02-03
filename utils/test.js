const chalk = require("chalk");

const { launch } = require("./launch");

exports.launchTest1 = () => {
  console.log("Launching Tests....");
  console.log("\n\n\n");
  console.log(chalk.black.bgWhite.bold("✅ SECTION 1: EQUATION RÉDUITE"));
  console.log("\n\n\n");
  console.log(
    chalk
      .rgb(123, 45, 67)
      .underline.bold("1) L'équation réduite est bien affichée")
  );
  console.log("\n\n\n");
  console.log(
    chalk
      .rgb(123, 45, 67)
      .underline.bold(
        "2) L'équation réduite a le bon format: \n- Tous les exposants apparaissent, du plus petit au plus grand \n- Chaque exposant est affiché une seule fois \n- La partie droite de l'équation est bien nulle"
      )
  );
  console.log("\n\n\n");
  console.log(
    chalk
      .rgb(123, 45, 67)
      .underline.bold(`Exemple : "5 * X^0 + 4 * X^1 - 9.3 * X^2 = 1 * X^0"`)
  );
  console.log("\n\n\n");
  launch("5 * X^0 + 4 * X^1 - 9.3 * X^2 = 1 * X^0");

  console.log("\n\n\n");
  console.log(
    chalk
      .rgb(123, 45, 67)
      .underline.bold(
        `Exemple with float exponents : "1 * X^1.2 + 1 * X^1.4 + 5 * X^0 + 4 * X^1 - 9.3 * X^2 = 1 * X^0"`
      )
  );
  console.log("\n\n\n");
  launch("1 * X^1.2 + 1 * X^1.4 + 5 * X^0 + 4 * X^1 - 9.3 * X^2 = 1 * X^0");
  console.log("\n\n\n");
  console.log(
    chalk
      .rgb(123, 45, 67)
      .underline.bold(
        `Exemple with negative exponents : "1 * X^-3 + 1 * X^-1 + 5 * X^0 + 4 * X^1 - 9.3 * X^2 = 1 * X^0"`
      )
  );
  console.log("\n\n\n");
  launch("1 * X^-3 + 1 * X^-1 + 5 * X^0 + 4 * X^1 - 9.3 * X^2 = 1 * X^0");

  console.log("\n\n\n");
  console.log(
    chalk
      .rgb(123, 45, 67)
      .underline.bold(
        `Exemple with huge exponents : "1 * X^0 + 1 * X^1 + 5 * X^0 + 4 * X^2 - 9.3 * X^42 + 9 * X^555 = 1 * X^0"`
      )
  );
  console.log("\n\n\n");
  launch(
    "1 * X^0 + 1 * X^1 + 5 * X^0 + 4 * X^2 - 9.3 * X^42 + 9 * X^555 = 1 * X^0"
  );
};

exports.launchTest2 = () => {
  console.log("Launching Tests....");
  console.log("\n\n\n");
  console.log(
    chalk.black.bgWhite.bold(
      "✅ SECTION 2: GESTION DE L'INPUT\nSi l'exposant est un float ou est négatif, alors le programme gère correctement la sortie."
    )
  );
  console.log("\n\n\n");
  console.log(
    chalk
      .rgb(123, 45, 67)
      .underline.bold("1) Présence d'un float dans un exposant")
  );
  console.log("\n\n\n");
  console.log(
    chalk
      .rgb(123, 45, 67)
      .underline.bold(`Exemple: "5 * X^2.5 + 4 * X^1 - 9.3 * X^2 = 1 * X^0"`)
  );
  console.log("\n\n\n");
  launch("5 * X^2.5 + 4 * X^1 - 9.3 * X^2 = 1 * X^0");
  console.log("\n\n\n");
  console.log(
    chalk.rgb(123, 45, 67).underline.bold("2) Présence d'un exposant négatif")
  );
  console.log("\n\n\n");
  console.log(
    chalk
      .rgb(123, 45, 67)
      .underline.bold(`Exemple: "5 * X^-2 + 4 * X^1 - 9.3 * X^2 = 1 * X^0"`)
  );
  console.log("\n\n\n");
  launch("5 * X^-2 + 4 * X^1 - 9.3 * X^2 = 1 * X^0");
};

exports.launchTest3 = () => {
  console.log("Launching Tests....");
  console.log("\n\n\n");
  console.log(chalk.black.bgWhite.bold("✅ SECTION 3: EQUATION DE DEGRÉ ZÉRO"));
  console.log("\n\n\n");
  console.log(chalk.rgb(123, 45, 67).underline.bold("1) Équation possible"));
  console.log("\n\n\n");
  console.log(
    chalk.rgb(123, 45, 67).underline.bold(`Exemple: "5 * X^0 = 5 * X^0"`)
  );
  console.log("\n\n\n");
  launch("5 * X^0 = 5 * X^0");
  console.log("\n\n\n");
  console.log(chalk.rgb(123, 45, 67).underline.bold("2) Équation impossible"));
  console.log("\n\n\n");
  console.log(
    chalk.rgb(123, 45, 67).underline.bold(`Exemple: "4 * X^0 = 8 * X^0"`)
  );
  console.log("\n\n\n");
  launch("4 * X^0 = 8 * X^0");
};

exports.launchTest4 = () => {
  console.log("Launching Tests....");
  console.log("\n\n\n");
  console.log(
    chalk.black.bgWhite.bold(
      "✅ SECTION 4: EQUATION DE DEGRÉ 1 - Une solution possible"
    )
  );
  console.log("\n\n\n");
  console.log(
    chalk
      .rgb(123, 45, 67)
      .underline.bold(`Exemple: "5 * X^0 = 4 * X^0 + 7 * X^1"`)
  );
  console.log("\n\n\n");
  launch("5 * X^0 = 4 * X^0 + 7 * X^1");

  console.log("\n\n\n");
  console.log(
    chalk
      .rgb(123, 45, 67)
      .underline.bold(`Exemple: "555.5 * X^0 = -455.30 * X^0 + 55.55 * X^1"`)
  );
  console.log("\n\n\n");
  launch("555.5 * X^0 = -455.30 * X^0 + 55.55 * X^1");

  console.log("\n\n\n");
  console.log(
    chalk
      .rgb(123, 45, 67)
      .underline.bold(`Exemple: "42.4242 * X^0 = -24242.49 * X^0 + 1234 * X^1"`)
  );
  console.log("\n\n\n");
  launch("42.4242 * X^0 = -24242.49 * X^0 + 1234 * X^1");
};

exports.launchTest5 = () => {
  console.log("Launching Tests....");
  console.log("\n\n\n");
  console.log(
    chalk.black.bgWhite.bold(
      "✅ SECTION 5: EQUATION DE DEGRÉ 2 - Discriminant positif"
    )
  );
  console.log("\n\n\n");
  console.log(
    chalk
      .rgb(123, 45, 67)
      .underline.bold(
        "Le programme précise que le discriminant est strictement positif et affiche deux solutions."
      )
  );
  console.log("\n\n\n");

  console.log(
    chalk
      .rgb(123, 45, 67)
      .underline.bold(
        `Exemple: "5 * X^0 + 13 * X^1 + 3 * X^2 = 1 * X^0 + 1 * X^1"`
      )
  );
  console.log("\n\n\n");
  launch("5 * X^0 + 13 * X^1 + 3 * X^2 = 1 * X^0 + 1 * X^1");
};

exports.launchTest6 = () => {
  console.log("Launching Tests....");
  console.log("\n\n\n");
  console.log(
    chalk.black.bgWhite.bold(
      "✅ SECTION 6: EQUATION DE DEGRÉ 2 - Discriminant nul"
    )
  );
  console.log("\n\n\n");
  console.log(
    chalk
      .rgb(123, 45, 67)
      .underline.bold(
        "Le programme précise que le discriminant est nul et affiche une unique solutions."
      )
  );
  console.log("\n\n\n");

  console.log(
    chalk
      .rgb(123, 45, 67)
      .underline.bold(
        `Exemple: "6 * X^0 + 11 * X^1 + 5 * X^2 = 1 * X^0 + 1 * X^1"`
      )
  );
  console.log("\n\n\n");
  launch("6 * X^0 + 11 * X^1 + 5 * X^2 = 1 * X^0 + 1 * X^1");
};

exports.launchTest7 = () => {
  console.log("Launching Tests....");
  console.log("\n\n\n");
  console.log(
    chalk.black.bgWhite.bold(
      "✅ SECTION 7: EQUATION DE DEGRÉ 2 - Discriminant négatif"
    )
  );
  console.log("\n\n\n");
  console.log(
    chalk
      .rgb(123, 45, 67)
      .underline.bold(
        "Le programme précise que le discriminant est negative et affiche deux solutions complexes."
      )
  );
  console.log("\n\n\n");

  console.log(
    chalk
      .rgb(123, 45, 67)
      .underline.bold(
        `Exemple: "5 * X^0 + 3 * X^1 + 3 * X^2 = 1 * X^0 + 0 * X^1"`
      )
  );
  console.log("\n\n\n");
  launch("5 * X^0 + 3 * X^1 + 3 * X^2 = 1 * X^0 + 0 * X^1");
};

exports.launchTest8 = () => {
  console.log("Launching Tests....");
  console.log("\n\n\n");
  console.log(
    chalk.black.bgWhite.bold("✅ SECTION 8: EQUATION DE 3 DEGRÉS OU PLUS ")
  );
  console.log("\n\n\n");
  console.log(
    chalk
      .rgb(123, 45, 67)
      .underline.bold("Le programme doit refuser de résoudre l'équation.")
  );
  console.log("\n\n\n");
  console.log(
    chalk
      .rgb(123, 45, 67)
      .underline.bold(
        `Exemple: "5 * X^0 + 3 * X^1 + 3 * X^42 = 1 * X^0 + 0 * X^1"`
      )
  );
  console.log("\n\n\n");
  launch("5 * X^0 + 3 * X^1 + 3 * X^42 = 1 * X^0 + 0 * X^1");
};
exports.launchTest9 = () => {
  console.log("Launching Tests....");
  console.log("\n\n\n");
  console.log(chalk.black.bgWhite.bold("✅ SECTION 9: BONUS "));
  console.log("\n\n\n");
  console.log(
    chalk.rgb(123, 45, 67).underline.bold("Ce checker est un bonus.")
  );
};
