const recipes = {

    'polpettone_siciliana': {
        title: "Polpettone alla Siciliana",
        category: "Secondi",
        ingredients: [
            "Impasto per polpettone (carne, uova, pane, formaggio)",
            "Olio EVO",
            "Vino bianco",
            "Cipolle",
            "Olive bianche snocciolate",
            "Olive nere (facoltative)"
        ],
        steps: [
            "Preparare un polpettone 'normale' e farlo soffriggere leggermente nell'olio intero.",
            "Quando è ben rosolato e cotto, sfumare con un po' di vino bianco e lasciar evaporare.",
            "Togliere il polpettone dalla pentola e tenerlo da parte.",
            "Nello stesso olio, aggiungere le cipolle tagliate sottili e farle imbiondire.",
            "Aggiungere le olive bianche (e qualcuna nera se piace) e far cuocere per qualche minuto.",
            "Versare altro vino bianco.",
            "Tagliare il polpettone a fettine e rimetterlo nel sugo.",
            "Far insaporire per pochi minuti prima di servire."
        ],
    },

    'panettone_2_colori': {
        title: "Panettone 2 Colori",
        category: "Dolci",
        ingredients: [
            "Farina: 500g",
            "Zucchero: 500g",
            "Uova: 6",
            "Burro o olio di semi: 200g",
            "Latte: 1/4 di litro",
            "Lievito Paneangeli: 1 bustina e mezza",
            "Cacao a piacere"
        ],
        steps: [
            "Montare il burro a neve, aggiungere lo zucchero e lavorare.",
            "Aggiungere i tuorli d'uovo uno per volta e continuare a lavorare.",
            "Aggiungere la farina e il latte alternandoli.",
            "Dopo aver lavorato bene il composto, aggiungere il lievito e girare delicatamente.",
            "Montare i bianchi a neve e incorporarli mischiando per bene.",
            "Prendere una parte dell'impasto e metterla in una scodella dove è stato preparato il cacao con un po' di zucchero.",
            "Versare l'impasto al cacao sopra quello bianco nello stampo."
        ],
    },

    'zeppole_bigne_forno': {
        title: "Zeppole Bignè al Forno",
        category: "Dolci",
        ingredients: [
            "Farina: 225g",
            "Uova: 6",
            "Burro: 125g",
            "Acqua: 250g",
            "Sale: un pizzico"
        ],
        steps: [
            "Mettere sul fuoco l'acqua, il burro e il sale.",
            "Quando l'acqua bolle, buttare dentro tutta la farina e far cuocere per pochi minuti, rimestando sempre, fino a che diventa una palla compatta.",
            "Far raffreddare l'impasto.",
            "Aggiungere le uova una per volta, lavorando bene l'impasto dopo ogni aggiunta.",
            "Formare le zeppole con una siringa da pasticcere.",
            "Infornare."
        ],
    },

    'vov': {
        title: "Vov (Liquore all'Uovo)",
        category: "Altro",
        ingredients: [
            "Tuorli d'uovo: 3",
            "Zucchero: 200g + 200g",
            "Latte: 400g",
            "Alcool puro: 100g",
            "Marsala all'uovo: 100g"
        ],
        steps: [
            "Battere i tre tuorli con 200g di zucchero.",
            "Far bollire 400g di latte con gli altri 200g di zucchero.",
            "Unire il latte (tiepido/freddo) alle uova e far raffreddare completamente.",
            "Unire 100g di alcool puro e 100g di marsala all'uovo.",
            "Imbottigliare."
        ],
    },

    'zeppole_fritte': {
        title: "Zeppole Fritte di Patate",
        category: "Dolci",
        ingredients: [
            "Farina: 500g",
            "Burro: 50g",
            "Uova: 6",
            "Lievito: 25g",
            "Patate: 2 grandi a pasta gialla (circa 300g)",
            "Limone grattugiato",
            "Liquore (Strega o altro): un guscio d'uovo pieno",
            "Sale: un pizzico",
            "Zucchero a velo e vanillina (per guarnire)"
        ],
        steps: [
            "Lessare le patate, schiacciarle e unirle agli altri ingredienti.",
            "Impastare tutto bene e mettere a lievitare per un paio d'ore.",
            "Formare le zeppole (ciambelle).",
            "Lasciar lievitare ancora per una mezz'ora.",
            "Friggere in abbondante olio.",
            "Dopo fritte, infarinarle nello zucchero a velo mescolato alla vanillina."
        ],
    },

    'torta_di_mele': {
        title: "Torta di Mele",
        category: "Dolci",
        ingredients: [
            "Farina: 400g",
            "Zucchero: 200g",
            "Burro (o olio di semi): 200g",
            "Uova: 2",
            "Mele: 1-2 Kg",
            "Latte: un bicchiere",
            "Lievito Paneangeli: 2 bustine",
            "Limone: buccia grattugiata di 2 limoni"
        ],
        steps: [
            "Lavorare per circa 10 minuti il burro e lo zucchero.",
            "Aggiungere i tuorli d'uovo, la farina, il latte e la buccia di limone grattugiata.",
            "Montare gli albumi a neve e aggiungerli all'impasto.",
            "In ultimo aggiungere le bustine di lievito.",
            "Versare l'impasto in una teglia.",
            "Disporre gli spicchi delle mele una vicino all'altra a forma di chiocciola.",
            "Cospargere sopra un po' di zucchero e qualche fiocchetto di burro.",
            "Mettere in forno moderato fino a doratura."
        ],
    },

    'tarallini_dolci': {
        title: "Tarallini Dolci",
        category: "Dolci",
        ingredients: [
            "Farina: 400g",
            "Zucchero: 100g",
            "Olio di semi: 3 cucchiai",
            "Uova: 3 intere e 1 tuorlo",
            "Lievito: mezza bustina",
            "Limone grattugiato",
            "Per la glassa:",
            "Zucchero a velo: 180g",
            "Bianchi d'uovo",
            "Succo di mezzo limone",
            "Vanillina: 1 bustina"
        ],
        steps: [
            "Impastare bene tutti gli ingredienti per la pasta e lavorare a lungo.",
            "Formare dei biscottini (tarallini).",
            "Mettere sul fuoco un pentolino con tre dita d'acqua.",
            "Quando l'acqua bolle, calare i biscotti (pochi per volta).",
            "Muoverli un po' con un mestolo di legno finché vengono a galla.",
            "Far bollire per un minuto, girarli e far bollire un altro minuto.",
            "Scolarli e metterli ad asciugare su un canovaccio.",
            "Infornare per la cottura.",
            "Nel frattempo preparare la glassa: montare gli albumi a neve aggiungendo lo zucchero a velo poco per volta e gocce di limone.",
            "Spennellare i biscotti cotti con la glassa.",
            "Far asciugare all'aria o per pochi minuti in forno."
        ]
    }
};
