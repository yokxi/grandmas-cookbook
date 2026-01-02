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
        category: "Liquori",
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
    },

    'limoncello_melissa': {
        title: "Limoncello alla Melissa",
        category: "Liquori",
        ingredients: [
            "Limoni: parte gialla di 3 limoni grandi",
            "Alcool 95°: 1/2 litro",
            "Erba di Melissa: un rametto",
            "Acqua: 4 dl",
            "Zucchero: 300g",
            "Succo di limone: 1-2 limoni (opzionale)"
        ],
        steps: [
            "Mettere a macerare le bucce di limone e la melissa nell'alcool per una settimana.",
            "Chiudere e filtrare dopo una settimana.",
            "Scaldare l'acqua e sciogliervi lo zucchero per fare lo sciroppo.",
            "Unire lo sciroppo freddo all'infuso.",
            "Agitare bene e lasciar riposare per altri sette giorni.",
            "Filtrare e imbottigliare.",
            "Lasciar riposare un paio di mesi prima di assaggiare.",
            "Per dare più profumo potete aggiungere all'infuso il succo di 1-2 limoni."
        ],
        notes: "Ricetta 'da rivista'."
    },

    'limoncello_classico': {
        title: "Limoncello Classico",
        category: "Liquori",
        ingredients: [
            "Alcool: 1/2 litro",
            "Limoni: 5",
            "Zucchero: 350g",
            "Acqua: 1/2 litro"
        ],
        steps: [
            "Mettere a macerare le bucce di limone nell'alcool per una settimana.",
            "Far bollire l'acqua con lo zucchero.",
            "Lasciare raffreddare lo sciroppo.",
            "Unire all'alcool e filtrare."
        ]
    },

    'crema_di_limone': {
        title: "Crema di Limone",
        category: "Liquori",
        ingredients: [
            "Limoni: bucce di 6 limoni",
            "Alcool: 1/2 litro",
            "Latte scremato totalmente",
            "Zucchero: 2 Kg",
            "Vanillina: 4 bustine"
        ],
        steps: [
            "Mettere le bucce di limone nell'alcool come sopra.",
            "Dopo 7 giorni, far bollire il latte con lo zucchero.",
            "Aggiungere la vanillina.",
            "Lasciar raffreddare prima di unire all'alcool."
        ]
    },

    'liquore_fragole': {
        title: "Liquore di Fragole",
        category: "Liquori",
        ingredients: [
            "Fragole ben mature: 1 Kg",
            "Alcool 95°: 1 litro",
            "Acqua: 1/2 litro",
            "Zucchero: 1 Kg"
        ],
        steps: [
            "Frullare le fragole.",
            "Metterle in un vaso di vetro con l'alcool.",
            "Lasciar macerare per 10 giorni ben coperto, agitando il vaso ogni giorno.",
            "Fare uno sciroppo con l'acqua e lo zucchero.",
            "Quando è raffreddato, aggiungerlo alle fragole.",
            "Lasciare riposare per altri 20 giorni.",
            "Filtrare."
        ],
        notes: "Buona ubriacatura!"
    },

    'bon_bon': {
        title: "I Bon Bon",
        category: "Dolci",
        ingredients: [
            "Nocciole",
            "Zucchero",
            "Cacao",
            "Liquore (un po')"
        ],
        steps: [
            "Frullare una certa quantità di nocciole.",
            "Unire zucchero e cacao.",
            "Impastare con un po' di liquore.",
            "Fare tanti bon bon e rotolarli nello zucchero.",
            "Lasciarli asciugare almeno per un giorno."
        ],
        notes: "... se puoi!"
    },

    'mandarinetto': {
        title: "Mandarinetto",
        category: "Liquori",
        ingredients: [
            "Scorza di mandarino grattugiata: 8 cucchiai",
            "Scorza di limone: 1 cucchiaino",
            "Succo di mandarino: 3 dl",
            "Alcool: 1/2 litro",
            "Zucchero: 300g",
            "Acqua bollente: 100g"
        ],
        steps: [
            "Mettere in infusione in un vaso ermetico le scorze, il succo e l'alcool.",
            "L'indomani unire lo sciroppo fatto con zucchero e acqua bollente (freddo).",
            "Dopo un mese, filtrare e imbottigliare.",
            "Fate riposare per un paio di mesi."
        ]
    },

    'fette_dolci_elisa': {
        title: "Fette Dolci x Elisa",
        category: "Dolci",
        ingredients: [
            "Farina: 1 Kg",
            "Miele: 500g",
            "Zucchero: 100g",
            "Acqua: 200g",
            "Ammoniaca: 10g",
            "Mandorle e noci (facoltative)"
        ],
        steps: [
            "Far intiepidire l'acqua con il miele e lo zucchero.",
            "Mischiare l'ammoniaca con la farina.",
            "Impastare tutto insieme per bene.",
            "Dare la forma (filoncini o biscotti) e infornare.",
            "Si fanno bollire per 20 minuti (? il testo è tagliato ma sembra riferirsi ad altro o è una nota confusa, seguo la logica dei mostaccioli/fette dolci)."
        ],
        notes: "Ricetta dedicata a Elisa."
    },

    'pastiera': {
        title: "Pastiera Napoletana",
        category: "Dolci",
        ingredients: [
            "Per il grano:",
            "Grano: 1 Kg (ammortato per 3 giorni, battuto e poi cotto)",
            "Burro: 100g (o un cucchiaio di sugna)",
            "Latte: 1 litro",
            "Cedro",
            "Cannella",
            "Millefiori (a piacere)",
            "Vanillina",
            "Scorza di limone/arancia",
            "Per la crema:",
            "Ricotta: 1 Kg",
            "Zucchero: 700g",
            "Uova: 20 (in totale tra intere e tuorli)",
            "Per la frolla:",
            "Farina: 1 Kg",
            "Zucchero: 1/2 Kg",
            "Sugna: 400g",
            "Uova: 10 tuorli",
            "Sale: un pizzico",
            "Lievito Paneangeli: 1 bustina"
        ],
        steps: [
            "Preparazione del grano (se crudo): mettere a bagno per mezz'ora, poi batterlo per togliere la crusca. Mettere a bagno per 2 giorni. Cuocere coperto d'acqua per 20 minuti. Lasciare nella pentola chiusa (tipo scatola latta) per 24 ore.",
            "Cottura finale grano: cuocere il grano nel latte come una crema assieme al burro (o sugna), cedro, cannella e millefiori.",
            "Quando è freddo, mischiarlo alla ricotta setacciata.",
            "Aggiungere i tuorli d'uovo ecc...",
            "In ultimo aggiungere gli albumi montati a neve.",
            "Preparare la frolla impastando farina, zucchero, sugna, tuorli, sale e lievito.",
            "Foderare le teglie con la frolla, versare il ripieno, fare le strisce sopra e infornare fino a doratura."
        ]
    },

    'liquore_cioccolato': {
        title: "Liquore al Cioccolato",
        category: "Liquori",
        ingredients: [
            "Zucchero: 1 Kg",
            "Latte: 1 litro",
            "Cacao amaro Perugina: 3 scatole da 70g (210g tot)",
            "Alcool: 1/4 di litro"
        ],
        steps: [
            "Mescolare bene zucchero e cacao.",
            "Aggiungere il latte mescolando sempre.",
            "Mettere sul fuoco e lasciare bollire.",
            "Far raffreddare.",
            "Aggiungere l'alcool e imbottigliare."
        ]
    },

    'sanguinaccio': {
        title: "Sanguinaccio",
        category: "Dolci",
        ingredients: [
            "Sangue: 1 litro",
            "Latte: 1.25 litri",
            "Farina: 3 cucchiai",
            "Cioccolata fondente: 500g",
            "Zucchero: 650g",
            "Tuorli d'uovo: 3",
            "Burro: 100g",
            "Cannella: 1 bastoncino",
            "Vanillina: 3 bustine",
            "A piacere: pinoli e uva passa"
        ],
        steps: [
            "Mettere tutto insieme (tranne la vanillina) e cuocere a bagnomaria a fuoco lentissimo per 2 o 3 ore.",
            "A fine cottura aggiungere la vanillina.",
            "Aggiungere pinoli e uva passa a piacere."
        ]
    },

    'zeppole_mamma_rosa': {
        title: "Zeppole Mamma Rosa",
        category: "Dolci",
        ingredients: [
            "Uova: 6",
            "Zucchero: 125g",
            "Sugna: 150g",
            "Farina: 1 Kg",
            "Lievito di birra: 50g",
            "Bucce di limone grattugiato",
            "Latte tiepido (per il lievito)"
        ],
        steps: [
            "Sciogliere il lievito con un po' di farina e latte tiepido per fare il lievitino.",
            "Quando è lievitato, impastarlo con tutti gli altri ingredienti.",
            "Mettere di nuovo a lievitare l'impasto.",
            "Quando la pasta è lievitata, formare le zeppole.",
            "Mettere le zeppole a lievitare ancora.",
            "Dopo l'ultima lievitazione, friggere (presumibilmente) o cuocere.",
            "Passare nello zucchero a velo con cannella e vaniglia."
        ],
        notes: "Ricetta di Mamma Rosa"
    },

    'baba_elisa': {
        title: "Babà Elisa",
        category: "Dolci",
        ingredients: [
            "Farina: 350g",
            "Uova: 6",
            "Burro: 100g",
            "Lievito di birra: 40g",
            "Zucchero: 1 cucchiaio",
            "Sale: un pizzico"
        ],
        steps: [
            "Lavorare il burro con un mestolo di legno fino a renderlo come una crema.",
            "Aggiungere il lievito e continuare a lavorare.",
            "Aggiungere le uova una per volta, sbattendo bene.",
            "Aggiungere farina, zucchero e sale.",
            "Lavorare bene l'impasto 'fino a che si stacca dal recipiente'.",
            "Riempire le formette per un terzo.",
            "Lasciar lievitare nelle formette finché sono piene.",
            "Infornare."
        ],
        notes: "Ricetta di Elisa"
    },

    'torta_cacao': {
        title: "Torta al Cacao",
        category: "Dolci",
        ingredients: [
            "Burro: 100g",
            "Uova: 3",
            "Farina: 300g",
            "Zucchero: 150g",
            "Latte: 1/4",
            "Cacao amaro: 50g",
            "Lievito Paneangeli: 1 bustina e mezza",
            "Opzionale: 200g mandorle o noccioline"
        ],
        steps: [
            "Liquefare il burro.",
            "Unire cacao e zucchero e mischiare bene.",
            "Aggiungere tuorli d'uovo, latte e farina (lavorare un po').",
            "Aggiungere il lievito sciolto in un po' di latte.",
            "Montare i bianchi a neve e aggiungerli per ultimi delicatamente.",
            "Opzionale: aggiungere mandorle/noccioline tritate (aggiungerle prima del lievito)."
        ]
    },

    'torta_gelata_pavesini': {
        title: "Torta Gelata (Pavesini)",
        category: "Dolci",
        ingredients: [
            "Ricotta: 500g",
            "Burro: 100g",
            "Zucchero a velo: 350g",
            "Pavesini: 3 pacchi (o 2 pacchi grandi)",
            "Uova fresche: 2",
            "Cioccolato: un pezzo",
            "Cacao: un po'",
            "Liquore: Alchermes con Strega (o altro a piacere)"
        ],
        steps: [
            "Passare la ricotta al setaccio con il burro.",
            "Mischiarla con lo zucchero.",
            "Dividere il composto in tre parti.",
            "Prima parte: lasciarla così com'è (bianca).",
            "Seconda parte: mettere i tuorli d'uovo.",
            "Terza parte: mettere un po' di cacao e cioccolata a pezzetti.",
            "Questi tre strati di crema andranno messi fra i quattro strati di pavesini bagnati nel liquore.",
            "Metterla in cella (freezer/frigo)."
        ]
    },

    'sospiri': {
        title: "Sospiri",
        category: "Dolci",
        ingredients: [
            "Mandorle tritate e pelate: 200g",
            "Zucchero: 200g",
            "Albumi: 2",
            "Vanillina: 1 bustina"
        ],
        steps: [
            "Tritare finemente le mandorle.",
            "Montare a neve ben soda gli albumi.",
            "Incorporarvi lo zucchero a poco a poco.",
            "Unire molto delicatamente le mandorle e la vanillina.",
            "Suddividere l'impasto a cucchiaiate ben distanziate su una placca rivestita con carta da forno.",
            "Infornare a 160° per 30 minuti (o finché i biscotti sono cotti).",
            "Servire i biscotti dopo averli fatti raffreddare."
        ]
    },

    'torta_arancia': {
        title: "Torta all'Arancia",
        category: "Dolci",
        ingredients: [
            "Farina: 300g",
            "Zucchero: 250g",
            "Burro: 75g",
            "Uova: 3",
            "Latte: 1/2 bicchiere",
            "Arance: succo e scorza grattugiata di 2 arance",
            "Sale: un pizzico",
            "Lievito Paneangeli: 1 bustina",
            "Vanillina: 1 bustina"
        ],
        steps: [
            "In una terrina mescolare lo zucchero con i tuorli d'uovo, con il succo e la scorza d'arancia.",
            "Aggiungere la farina sgradatamente, il burro liquefatto e il latte.",
            "Lavorarlo per bene.",
            "Montare le chiare d'uovo a neve e unirle all'impasto girando delicatamente.",
            "Unire la bustina di lievito.",
            "Quando è raffreddato cospargerlo di zucchero vanigliato."
        ]
    },

    'peschine': {
        title: "Peschine",
        category: "Dolci",
        ingredients: [
            "Farina: 1 Kg",
            "Uova: 8",
            "Sugna: 300g (o Burro 350g)",
            "Zucchero: 400g",
            "Lievito Paneangeli: 2 bustine",
            "Sale: un pizzico",
            "Per farcire: crema bianca e crema al cioccolato",
            "Per bagna e finitura: liquore rosso (Alchermes), zucchero semolato"
        ],
        steps: [
            "Si impasta tutto (farina, uova, sugna/burro, zucchero, lievito, sale) come un panettone.",
            "Si formano delle palline che si stendono sui gusci di noci unte di burro.",
            "S'infornano e ancora calde si tolgono dai gusci.",
            "Si bagnano velocemente nel liquore rosso.",
            "S'imbottiscono le due metà: di crema bianca da una parte e altra metà al cioccolato.",
            "Si chiudono e si passano nello zucchero."
        ]
    },

    'pesche_sciroppate_ersilia': {
        title: "Pesche Sciroppate Ersilia",
        category: "Conserviere",
        ingredients: [
            "Acqua: 1 litro",
            "Zucchero: 1 Kg",
            "Pesche (sbucciate e divise a metà)"
        ],
        steps: [
            "Si mette a bollire un litro d'acqua con un chilo di zucchero.",
            "Quando bolle si buttano le pesche pulite e a metà.",
            "Si fanno bollire per pochi secondi.",
            "Bollenti si mettono nei vasi di vetro.",
            "Si coprono di sciroppo bollente.",
            "Si mettono capovolti in uno scatolo foderato con coperta di lana.",
            "Si coprono e si lasciano raffreddare per 3-4 giorni."
        ],
        notes: "Ricetta di Ersilia"
    },

    'pasta_frolla_luana': {
        title: "Pasta Frolla (Luana)",
        category: "Dolci",
        ingredients: [
            "Farina: 500g",
            "Burro: 300g",
            "Zucchero: 200g",
            "Tuorli: 4",
            "Sale: un pizzico",
            "Vanillina",
            "Buccia di limone grattugiata"
        ],
        steps: [
            "Disporre farina e burro al centro.",
            "Aggiungere lo zucchero.",
            "Aggiungere gli aromi (vanillina, limone).",
            "Per finire unire i tuorli e il sale.",
            "Impastare velocemente."
        ],
        notes: "Ricetta di Luana"
    },

    'castagnacci_michela': {
        title: "Castagnacci (Michela)",
        category: "Dolci",
        ingredients: [
            "Castagne: 1 Kg",
            "Zucchero: 600g",
            "Burro: 250g",
            "Cioccolato fondente: 1 Kg",
            "Cacao amaro: un pacco",
            "Buccia di limone grattugiata",
            "Liquore Strega: un po'",
            "Per la Pasta Frolla:",
            "Farina: 1 Kg",
            "Tuorli d'uovo: 8",
            "Zucchero: 300g",
            "Burro: 300g",
            "Lievito Paneangeli: 1 busta",
            "Liquore Strega: un po'",
            "Buccia d'arancia e limone grattugiata"
        ],
        steps: [
            "Preparare il ripieno unendo le castagne (passate), lo zucchero, il burro, il cioccolato, il cacao e gli aromi.",
            "Preparare la frolla impastando tutti gli ingredienti.",
            "Formare i castagnacci e cuocere."
        ],
        notes: "Ricetta di Michela"
    },

    'semifreddo_salame': {
        title: "Semifreddo (a salame)",
        category: "Dolci",
        ingredients: [
            "Zucchero: 500g",
            "Biscotti (gallette): 500g",
            "Uova: 4",
            "Sale: un pizzico",
            "Rum e Cacao a piacere",
            "Burro: 100g"
        ],
        steps: [
            "Sbattere i bianchi a neve.",
            "Aggiungere lo zucchero, i tuorli d'uovo, il cacao e il burro liquefatto.",
            "Aggiungere i biscotti tagliati a piccoli pezzi.",
            "Mischiare il tutto.",
            "Lasciar riposare per un po' (una ventina di minuti) girando ogni tanto.",
            "Prendere la carta argentata, mettere un po' d'impasto e arrotolare come un salame.",
            "Si tiene nel freezer."
        ]
    },

    'zuppa_inglese_savoiardi': {
        title: "Zuppa Inglese (con savoiardi)",
        category: "Dolci",
        ingredients: [
            "Tuorli d'uovo: 4",
            "Zucchero: 120g",
            "Latte: 1/2 litro",
            "Caffè ristretto: una tazzina",
            "Panna: 1/4 (di litro?)",
            "Savoiardi",
            "Cioccolata fondente"
        ],
        steps: [
            "Battere le uova con lo zucchero.",
            "Aggiungere il latte bollente.",
            "Mettere il composto sul fuoco e lasciarlo addensare.",
            "Quando è freddo aggiungere il caffè e la panna.",
            "Bagnare i savoiardi nella crema e allinearli in un piatto fino a formare una piramide.",
            "Lasciare per qualche ora nel frigo.",
            "Al momento di servirli sciogliere la cioccolata fondente e metterla sopra."
        ]
    },

    'mostaccioli': {
        title: "Mostaccioli",
        category: "Dolci",
        ingredients: [
            "Farina: 1.250 Kg",
            "Zucchero: 850g",
            "Acqua: 350g",
            "Cacao: 15g",
            "Miele: 1 cucchiaino",
            "Cannella: 15g",
            "Vanillina",
            "Ammoniaca: 20g"
        ],
        steps: [
            "Impastare tutti gli ingredienti (farina, zucchero, acqua, cacao, miele, cannella, vaniglia, ammoniaca).",
            "Dare la forma (tipici rombi).",
            "Infornare."
        ]
    },

    'dolcetti_luana': {
        title: "Dolcetti (Luana)",
        category: "Dolci",
        ingredients: [
            "Mandorle macinate: 500g",
            "Zucchero: 400g",
            "Vanillina: 1 bustina",
            "Albumi: 4",
            "Acqua: 1/2 bicchiere"
        ],
        steps: [
            "Sciogliere lo zucchero con l'acqua aggiungendo la vanillina e portare a leggera ebollizione.",
            "Spegnere il fuoco ed aggiungere le mandorle amalgamando tutto.",
            "Far raffreddare.",
            "Aggiungere i bianchi montati a neve e impastare con le mani.",
            "Formare piccole palline, mettere metà ciliegina e schiacciare lievemente.",
            "Infornare su carta forno, forno già caldo a circa 180° per 10-15 minuti."
        ],
        notes: "Ricetta di Luana"
    },

    'zeppole_olga': {
        title: "Zeppole (Olga)",
        category: "Dolci",
        ingredients: [
            "Farina: 1 Kg",
            "Uova: 5",
            "Lievito di birra: 50g",
            "Patate: 3 o 4",
            "Burro: 100g",
            "Zucchero: 1 cucchiaio",
            "Sale: 1 pizzico",
            "Latte: 1 pacchettino (per sciogliere il lievito)",
            "Limone grattugiato",
            "Liquore Strega: 1 bicchierino"
        ],
        steps: [
            "Lessare e schiacciare le patate.",
            "Calde, unirle al burro e lavorarle per bene.",
            "Unire la farina e tutti gli altri ingredienti.",
            "Sbattere per bene l'impasto in un contenitore.",
            "Lavorarlo dolcemente sullo schianatoio.",
            "Formare delle zeppoline e metterle a lievitare.",
            "Dopo fritte, s'avvolgono nello zucchero e cannella."
        ],
        notes: "Ricetta di Olga"
    },

    'bucce_candite': {
        title: "Bucce Candite (Arance)",
        category: "Dolci",
        ingredients: [
            "Bucce d'arancia",
            "Acqua",
            "Zucchero"
        ],
        steps: [
            "Mettere le bucce in una pentola coperte d'acqua e far bollire per 15 minuti.",
            "Passarle nell'acqua fredda ed asciugarle per bene.",
            "Sistemarle in un barattolo coprendole con lo zucchero.",
            "Il giorno dopo e per 7 giorni, fare sgocciolare lo sciroppo che è uscito dalle arance, farlo bollire, versarlo di nuovo sulle bucce e aggiungere altro zucchero (ripetere sempre la stessa operazione).",
            "Dopo si sistemano nei vasi di vetro e si conservano per molti mesi."
        ]
    },

    'panettone_bicarbonato': {
        title: "Panettone (con bicarbonato)",
        category: "Dolci",
        ingredients: [
            "Farina: 1 Kg",
            "Uova: 6",
            "Zucchero: 300g",
            "Burro o Sugna: 250g",
            "Cedro e Uva passa: una tazza (o q.b.)",
            "Latte: quanto ne assorbe",
            "Cremore: 30g",
            "Bicarbonato: 15g"
        ],
        steps: [
            "Impastare tutti gli ingredienti.",
            "Aggiungere il latte quanto basta per ottenere la consistenza giusta."
        ]
    },

    'occhi_di_bue': {
        title: "Occhi di Bue",
        category: "Dolci",
        ingredients: [
            "Farina: 1 Kg",
            "Zucchero: 400g",
            "Burro: 400g",
            "Uova: 5",
            "Limone grattugiato",
            "Ammoniaca: 1/2 cucchiaino (oppure 2 cucchiaini Paneangeli)",
            "Miele: 1/2 cucchiaio",
            "Marmellata"
        ],
        steps: [
            "Impastare tutto e mettere l'impasto nel frigo per un'ora.",
            "Fare i dischi: uno chiuso e uno col buco al centro.",
            "Cuocerli nel forno.",
            "Prendere la marmellata, metterla in un pentolino con un po' d'acqua (o Stock) e spalmarla sul biscotto intero.",
            "Coprirlo con quello aperto."
        ]
    },

    'roccoco': {
        title: "Roccocò",
        category: "Dolci",
        ingredients: [
            "Farina: 1.500 Kg",
            "Zucchero: 1 Kg",
            "Mandorle a pezzettini: 400g",
            "Frutta candita: a piacere (o 200g)",
            "Ammoniaca: 20g",
            "Arancio e limone grattugiato",
            "Cannella",
            "Acqua tiepida",
            "Uovo per spennellare"
        ],
        steps: [
            "Impastare tutto con acqua tiepida.",
            "Formare i roccocò.",
            "Spennellare con uovo.",
            "Cuocere in forno."
        ]
    },

    'naspro': {
        title: "Naspro (Glassa)",
        category: "Altro",
        ingredients: [
            "Zucchero",
            "Acqua",
            "Bianchi d'uovo (Albumi)"
        ],
        steps: [
            "Proporzioni: Ogni bianco d'uovo porta 80g di zucchero.",
            "Oppure misurare col bicchiere: due parti di zucchero e una d'acqua.",
            "Mettere a bollire acqua e zucchero.",
            "Sbattere i bianchi a neve.",
            "Quando lo zucchero 'fila' (forma un filo quando colato), versarlo bollente sui bianchi.",
            "Continuare a sbattere fino a che siano freddi."
        ]
    },

    'panettone_crema': {
        title: "Panettone con crema",
        category: "Dolci",
        ingredients: [
            "Farina: 600g",
            "Uova: 2",
            "Marsala: 100g",
            "Sugna: 150g",
            "Limone grattugiato",
            "Zucchero: 250g",
            "Lievito Paneangeli: 2 bustine",
            "Crema (non specificata, probabilmente crema pasticcera o confettura)"
        ],
        steps: [
            "Mischiare tutto con le mani senza lavorare molto.",
            "Mettere una porzione nella teglia imburrata.",
            "Coprire con la crema.",
            "Mettere il resto della pasta sopra con le mani come una pioggia di grandine."
        ]
    },

    'pesche_amaretti': {
        title: "Pesche agli Amaretti",
        category: "Dolci",
        ingredients: [
            "Pesche gialle: 4",
            "Zucchero: 100g",
            "Burro: 50g",
            "Uova: 1",
            "Amaretti: 100g",
            "Mandorle: 5",
            "Sherry (Sherri): 1 bicchierino",
            "Cacao amaro: 25g"
        ],
        steps: [
            "Sbucciare le pesche, privarle del nocciolo e tagliarle a metà.",
            "Tagliare un po' di polpa al centro delle pesche.",
            "In una terrina unire la polpa, gli amaretti tritati, l'uovo intero, il cacao, le mandorle tritate, lo sherry e lo zucchero.",
            "Lavorare bene il composto.",
            "Suddividere il ripieno nelle cavità delle mezze pesche.",
            "Disporre le pesche in una pirofila imburrata.",
            "Cospargere di fiocchi di burro.",
            "Infornare e servire sia calde che fredde."
        ]
    },

    'tiramisu': {
        title: "Tiramisù",
        category: "Dolci",
        ingredients: [
            "Uova: 4",
            "Mascarpone: 400g (freschissimo)",
            "Rum o Brandy: 2 cucchiai",
            "Savoiardi: 300g",
            "Caffè leggero: 1/4 (di litro?)",
            "Zucchero: 100g",
            "Cacao amaro (per spolverizzare)"
        ],
        steps: [
            "Sgusciare i tuorli tenendo da parte gli albumi.",
            "In una terrina unire i tuorli con lo zucchero e montarli a spuma.",
            "Incorporare il mascarpone (freschissimo) e montare ancora finché si ottiene una crema omogenea.",
            "Aggiungere il liquore (Rum o Brandy).",
            "Montare a neve metà degli albumi e uniteli alla crema di uovo e mascarpone amalgamando bene.",
            "Versate il caffè freddo in una ciotola, zuccheratelo a piacere.",
            "Immergere velocemente i savoiardi uno per volta e coprire il fondo di una pirofila rettangolare.",
            "Stendere sopra uno strato di crema, poi ancora uno strato di savoiardi.",
            "Ripetere uno strato di crema e quello di savoiardi e terminate con la crema livellata bene.",
            "Mettere in frigo coperto.",
            "Al momento di servire, spolverizzare con cacao amaro usando un colino."
        ]
    },

    'fette_dolci_elena': {
        title: "Fette Dolci Elena",
        category: "Dolci",
        ingredients: [
            "Farina: 1 Kg",
            "Uova: 8",
            "Zucchero: 1/2 Kg",
            "Sugna: 150g",
            "Cremore: 30g",
            "Bicarbonato: 20g",
            "Limone grattugiato",
            "Latte: una tazza",
            "Per la 'Pappetta per i profitteroli':",
            "Crema pasticcera: 1 litro",
            "Cioccolato fondente: 600g",
            "Liquore Strega: 100g",
            "Acqua: 100g con un cucchiaio di zucchero",
            "Cioccolata grattugiata"
        ],
        steps: [
            "Impastare gli ingredienti principali (farina, uova, zucchero, sugna, lieviti, limone, latte).",
            "Per la copertura (pappetta): aggiungere alla crema ancora calda la cioccolata grattugiata con il liquore.",
            "Aggiungere l'acqua zuccherata a poco a poco.",
            "Riempire i dolci con la panna.",
            "Uno per volta, si immergono nella 'pappetta' e si forma una piramide.",
            "Si mettono in frigo o nel congelatore."
        ]
    },

    'bastoncini_postiglione': {
        title: "Bastoncini (Postiglione)",
        category: "Dolci",
        ingredients: [
            "Pan di Spagna",
            "Cioccolato fondente",
            "Farina di cocco (cocco disidratato)"
        ],
        steps: [
            "Si preparano dei bastoncini di pan di spagna.",
            "Si arrotolano uno per volta nel cioccolato fondente sciolto a bagnomaria.",
            "Si avvoltolano nella farina di cocco.",
            "Si fanno asciugare su un foglio di carta bianca."
        ]
    },

    'pan_di_spagna_luana': {
        title: "Pan di Spagna senza bustine (Luana)",
        category: "Basi",
        ingredients: [
            "Uova: 6",
            "Zucchero: 225g",
            "Farina: 225g",
            "Limone grattugiato o Vaniglia"
        ],
        steps: [
            "Sbattere uova e zucchero per molto tempo.",
            "Aggiungere per ultimo la farina girando dolcemente con una spatola.",
            "Teglia 25x40.",
            "Cottura: 45 minuti."
        ]
    },

    'pan_di_spagna_classico': {
        title: "Pan di Spagna (Classico)",
        category: "Basi",
        ingredients: [
            "Farina: 300g",
            "Zucchero: 300g",
            "Uova: 8",
            "Lievito: 1 bustina"
        ],
        steps: [
            "Sbattere tuorli e zucchero fino a diventare una crema.",
            "Aggiungere la farina e il lievito.",
            "In ultimo l'albume montato a neve e girare delicatamente."
        ]
    },

    'fette_dolci_miele_olivetta': {
        title: "Fette Dolci al Miele (Olivetta)",
        category: "Dolci",
        ingredients: [
            "Farina: 1.5 Kg",
            "Miele: 1/2 Kg",
            "Uova: 5",
            "Strega o Rum: un po'",
            "Bicarbonato: un po' (o Paneangeli 2 bustine)",
            "Zucchero: 300g",
            "Limone grattugiato"
        ],
        steps: [
            "Si lavora il tutto per bene.",
            "Si formano dei panetti lunghi e si tagliano ancora caldi.",
            "Metterli su carta forno."
        ]
    },

    'torta_al_caffe': {
        title: "Torta al Caffè",
        category: "Dolci",
        ingredients: [
            "Tuorli: 6",
            "Zucchero: 100g",
            "Farina: 100g (mescolata con mezza bustina di lievito)",
            "Burro fuso: 50g",
            "Caffè ristretto: 2 tazzine",
            "Cacao in polvere: 1 cucchiaino",
            "Albumi: 3 (montati a neve ben ferma)",
            "Panna e Cacao (per guarnire)"
        ],
        steps: [
            "Montare i tuorli con lo zucchero.",
            "Aggiungere la farina col lievito.",
            "Quindi unire il burro fuso, il caffè e il cacao.",
            "Infine incorporare gli albumi montati.",
            "Versare in una tortiera di 20cm imburrata e infarinata.",
            "Cuocere a 180° per 45 minuti circa.",
            "Spalmare sulla superficie uno strato di panna e del cacao con un colino."
        ]
    },

    'torta_di_rose': {
        title: "Torta di Rose",
        category: "Dolci",
        ingredients: [
            "Farina: 300g",
            "Tuorli: 3",
            "Olio: 3 cucchiai",
            "Zucchero: 1 cucchiaio",
            "Latte: 1/2 bicchiere (tiepido)",
            "Lievito di birra: 25g (sciolto nel latte)",
            "Scorza di limone",
            "Sale: 1 pizzico",
            "Per farcire:",
            "Burro morbido: 150g",
            "Zucchero: 1 bicchiere"
        ],
        steps: [
            "Mettere nel boccale (o impastatrice) zucchero e scorza di limone.",
            "Aggiungere il latte con il lievito sciolto, l'olio e i tuorli.",
            "Versare a pioggia la farina e il sale.",
            "Versare l'impasto sul piano del tavolo infarinato e tirare una sfoglia rettangolare piuttosto sottile.",
            "Preparare la farcitura: lavorare il burro morbido con lo zucchero.",
            "Spennellare tutta la pasta con questo composto.",
            "Arrotolare su se stesso il rettangolo e tagliare tanti tronchetti lunghi 4 cm.",
            "Chiuderli bene da un lato e sistemarli in una teglia unta e infarinata (diametro 26 cm) distanziati fra loro, uno al centro e gli altri a corona.",
            "Lasciar lievitare per più di un'ora finché non saranno uniti.",
            "Cuocere a forno caldo a 180° per 25 minuti."
        ]
    },

    'fette_marmellata_olga': {
        title: "Fette con Marmellata (Olga)",
        category: "Dolci",
        ingredients: [
            "Farina: 1/2 Kg",
            "Zucchero: 200g",
            "Burro: 150g",
            "Uova: 2 intere e 3 tuorli",
            "Lievito: 1/2 bustina",
            "Limone grattugiato",
            "Marmellata (non tanta)"
        ],
        steps: [
            "Impastare velocemente il tutto.",
            "Stendere col mattarello un rettangolo sulla carta da forno.",
            "Spalmarci sopra la marmellata (non tanta).",
            "Si rotola con delicatezza un 'salametto' lungo.",
            "Dopo cotto si tagliano le fette."
        ]
    },

    'baba_rustico_apostolico': {
        title: "Babà Rustico (Apostolico)",
        category: "Altro",
        ingredients: [
            "Farina: 400g",
            "Uova: 4",
            "Salame, Patate (4), un po' di burro, un po' di olio",
            "Lievito di birra: 25g",
            "A piacere: provolone, formaggio parmigiano, pecorino, scamorza asciutta",
            "Sale e pepe a piacere"
        ],
        steps: [
            "Lessare le patate e passarle nello schiaccia patate.",
            "Ancora calde mettere il burro e il lievito e lavorare per bene.",
            "Aggiungere gli altri ingredienti a piccoli pezzi.",
            "Metterli in una teglia imburrata e infarinata (riempire meno della metà).",
            "Quando è lievitato bene, infornare a 180°."
        ]
    },

    'zeppole_postiglione': {
        title: "Zeppole (Postiglione)",
        category: "Dolci",
        ingredients: [
            "Farina: 1 Kg",
            "Uova: 5",
            "Patate: 1 Kg",
            "Olio: un po'",
            "Sale: un pizzico",
            "Lievito: un pezzettino",
            "Liquore: un po'",
            "Limone e arancio grattugiati"
        ],
        steps: [
            "Impastare tutti gli ingredienti (le patate vanno lessate e schiacciate).",
            "Friggere in abbondante olio."
        ]
    },

    'liquore_caffe': {
        title: "Liquore al Caffè",
        category: "Liquori",
        ingredients: [
            "Alcol: 1/2 litro",
            "Caffè: 150-200g (in grani o polvere? Probabilmente liquido ristretto o polvere per infusione - la ricetta dice 'preparare il caffè normale e ristretto')",
            "Zucchero: 700g"
        ],
        steps: [
            "Preparare il caffè normale e ristretto.",
            "Quando è freddo, si aggiunge all'alcool.",
            "Si lascia per un po' prima di berlo."
        ]
    },

    'erbazzone_reggio_emilia': {
        title: "Erbazzone (scarpazzòun)",
        category: "Altro",
        ingredients: [
            "Per la sfoglia:",
            "Farina",
            "Sale",
            "Pochissimo burro",
            "Acqua e Latte (quantità ineguale, q.b. per impasto elastico e sodo)",
            "Per il ripieno:",
            "Spinaci: 1 Kg",
            "Bieta: 1/2 Kg",
            "Uova: 3",
            "Cipolla: 1",
            "Prezzemolo: una manciata",
            "Pangrattato grosso",
            "Formaggio parmigiano",
            "Burro: una piccola noce",
            "Lardo di prosciutto (un po' per il soffritto e fettine per guarnire)"
        ],
        steps: [
            "Per la sfoglia: preparare l'impasto lavorandolo fino a renderlo elastico e sodo.",
            "Per il ripieno: soffriggere nel burro un trito di cipolla e lardo di prosciutto.",
            "Scottare le verdure (spinaci e bieta), tritarle grossolanamente e strizzarle bene.",
            "Aggiungere le verdure al soffritto insieme a pangrattato, sale, prezzemolo tritato, uova e formaggio.",
            "Tirare la sfoglia sottile e coprire il fondo di una teglia con carta forno.",
            "Mettere una parte della sfoglia sulla base, bucherellare con la forchetta.",
            "Versare l'impasto.",
            "Coprire con la restante sfoglia, facendola risultare un po' raggrinzita (non liscia).",
            "Arricchire la superficie con fettine di lardo di prosciutto.",
            "Cuocere in forno a 180° finché la superficie è colorita e il lardo si è sciolto."
        ]
    },

    'coniglio_vicentina': {
        title: "Coniglio alla Vicentina",
        category: "Secondi",
        ingredients: [
            "Coniglio a pezzi",
            "Olio e Burro",
            "Aglio, Rosmarino, Prezzemolo, Odori vari",
            "Vino bianco: 1 bicchiere",
            "Aceto: 1/2 bicchiere (o metà del bicchiere di vino?)",
            "Sale e Pepe",
            "Pomodori",
            "Origano"
        ],
        steps: [
            "Mettere il coniglio a pezzi nell'olio e burro e far rosolare a fuoco basso.",
            "Tritare finemente aglio, rosmarino, prezzemolo e odori vari.",
            "Prendere 1 bicchiere di vino bianco e metà d'aceto.",
            "Si aggiunge al trito con sale e pepe.",
            "Si versa sul coniglio facendolo evaporare lentamente.",
            "Dopo si aggiungono pomodori e origano e si lascia cuocere."
        ]
    },

    'tortellini_zia_concetta': {
        title: "Tortellini (Zia Concetta)",
        category: "Primi",
        ingredients: [
            "Per il Ripieno (per 9 persone):",
            "Mortadella: 140g",
            "Prosciutto crudo: 100g",
            "Lonza di maiale: 150g",
            "Carne magra di vitello: 100g",
            "Carne magra di maiale: 70g",
            "Petto di pollo: 70g",
            "Parmigiano grattugiato: 200g",
            "Uova: 2",
            "Noce moscata: un po'",
            "Burro: una noce",
            "Per la Sfoglia:",
            "Farina: 1 Kg",
            "Uova: 10"
        ],
        steps: [
            "Rosolare la carne (vitello, maiale, pollo) e la lonza tagliati a pezzetti con una noce di burro.",
            "Passare finemente tutta la carne e i salumi.",
            "Ripetere due o tre volte la macinata: il composto deve essere morbido e fine come una crema.",
            "Aggiungere le uova, il formaggio e un po' di noce moscata.",
            "Preparare la sfoglia (deve essere sottile).",
            "Tagliare dei quadretti di circa 3 cm.",
            "Mettere nel mezzo un pizzico di ripieno.",
            "Chiudere a triangolo e richiudere il triangolo in modo da ottenere una piccola ciambellina."
        ]
    },

    'rotolo_spinaci': {
        title: "Rotolo con Spinaci",
        category: "Primi",
        ingredients: [
            "Per la Sfoglia:",
            "Uova: 2",
            "Farina",
            "Acqua: un poco",
            "Per la farcitura (per 4 persone):",
            "Spinaci: 250g",
            "Ricotta: 400g",
            "Uova intere: 2",
            "Formaggio parmigiano",
            "Sale e pepe"
        ],
        steps: [
            "Cuocere gli spinaci senza acqua, strizzarli e unirli alla ricotta.",
            "Aggiungere le uova, il formaggio, sale e pepe senza lavorarlo troppo.",
            "Tirare la sfoglia e mettere il ripieno.",
            "Formare un rotolo (si può anche congelare).",
            "Quando serve, tagliare a rotelle.",
            "Sistemarle in una teglia imburrata, coprirle di besciamella e mettere in forno."
        ]
    },

    'pasta_e_patate_apostolico': {
        title: "Pasta e Patate (Apostolico)",
        category: "Primi",
        ingredients: [
            "Pancetta tritata",
            "Aglio tritato",
            "Basilico tritato: una manciata",
            "Patate",
            "Pasta a cubetti/tocchetti",
            "Formaggio"
        ],
        steps: [
            "Mettere a soffriggere pancetta e aglio tritati.",
            "Quando è ancora umido, buttare dentro una manciata di basilico tritato e spegnere il fuoco.",
            "Nell'acqua bollente buttare le patate a tocchetti.",
            "Dopo un po' aggiungere la pasta.",
            "Quando è cotta, scolarla e buttarla nel soffritto con un mestolino d'acqua della pasta e del formaggio."
        ]
    },

    'zampone_lenticchie': {
        title: "Zampone e Lenticchie",
        category: "Secondi",
        ingredients: [
            "Zampone o Cotechino: 1",
            "Lenticchie: 1 Kg",
            "Olio: 5 cucchiai",
            "Burro: una noce",
            "Soffritto: cipolla, sedano, carota, pancetta, aglio, alloro",
            "Conserva di pomodoro: 1 cucchiaio",
            "Brodo, Sale, Pepe"
        ],
        steps: [
            "Mettere a bagno le lenticchie per una notte.",
            "Preparare un soffritto con burro, olio, cipolla, sedano, carota, pancetta, aglio e alloro.",
            "Aggiungere le lenticchie e il pomodoro, mescolare bene e far cuocere a fuoco lento (aggiungendo brodo se necessario).",
            "A parte, bollire lentamente lo zampone pungendolo in modo che non scoppi.",
            "Servire caldo affettato con le lenticchie."
        ]
    },

    'sapone_a_crudo': {
        title: "Sapone a Crudo",
        category: "Altro",
        ingredients: [
            "Acqua: 1.7 litri",
            "Soda: 1/2 Kg",
            "Olio: 2 litri e mezzo (o sugna)",
            "Detersivo per bucato: 1 scatolo",
            "Farina: 1 pugno"
        ],
        steps: [
            "ATTENZIONE: Ricetta per sapone fatto in casa (non alimentare).",
            "Mettere tutto in un recipiente.",
            "Girare per molto tempo finché non addensa."
        ]
    },

    'tortano_napoletano': {
        title: "Tortano Napoletano",
        category: "Altro",
        ingredients: [
            "Per l'impasto:",
            "Farina: 400g",
            "Acqua tiepida: 100g",
            "Latte: 100g",
            "Uova: 1",
            "Lievito: 1 cubetto",
            "Zucchero: 1 cucchiaino",
            "Sale: 1 cucchiaino",
            "Burro: 50g (25g nell'impasto, il resto per ungere)",
            "Pepe q.b.",
            "Per il ripieno:",
            "Salame napoletano piccante: 150g",
            "Provolone: 150g",
            "Pancetta/Prosciutto: 50g"
        ],
        steps: [
            "Lavorare in un recipiente latte, acqua, uovo, 25g di burro, sale e zucchero.",
            "Aggiungere il lievito e la farina e lavorare come un panettone morbido.",
            "Lasciar lievitare per circa un'ora.",
            "Stendere la pasta sul tavolo sopra un foglio di carta stagnola infarinata (rettangolo).",
            "Ungere la pasta con il rimanente burro e info d'olio.",
            "Cospargere con i salumi e formaggi tritati per bene.",
            "Arrotolare nel senso della lunghezza.",
            "Adagiare in una teglia imburrata formando una ciambella.",
            "Lasciar lievitare per circa un'ora.",
            "Cuocere in forno caldo a 220° per 20 minuti, poi a 180° per altri 30 minuti.",
            "Pochi minuti prima di sfornare, spennellare con uovo sbattuto."
        ]
    },

    'risotto_fragole': {
        title: "Risotto alle Fragole",
        category: "Primi",
        ingredients: [
            "Fragole",
            "Mezzo bicchiere di vino bianco",
            "Cipolla finissima",
            "Burro",
            "Riso",
            "Brodo vegetale",
            "Panna liquida: un cucchiaio"
        ],
        steps: [
            "Lavare le fragole e metterle a bagno in mezzo bicchiere di vino bianco per mezz'ora (macerare).",
            "A parte fare un soffritto con cipolla e burro.",
            "Tostare il riso, unire del brodo vegetale e mescolare.",
            "Versare il vino bianco (della macerazione) e far evaporare.",
            "Quando il riso sarà cotto, mettere le fragole tagliate a pezzi e un cucchiaio di panna liquida.",
            "Mantecare e servire subito."
        ]
    },

    'vitel_tonnato': {
        title: "Vitel Tonnato",
        category: "Secondi",
        ingredients: [
            "Pezzo di carne (tipo rosbif)",
            "Carote: 2",
            "Sedano",
            "Salvia, Rosmarino",
            "Patate",
            "Alloro: 2 foglie",
            "Caffè (in chicchi?)",
            "Acciughe: 2",
            "Dado per brodo",
            "Metà limone",
            "Tonno",
            "Maionese"
        ],
        steps: [
            "Mettere a bollire la carne con carote, sedano, salia, rosmarino, patate, alloro, caffè, acciughe, dado e limone.",
            "Cuocere tutto e lasciar raffreddare.",
            "Il giorno dopo tagliare la carne molto sottile (non deve essere molto cotta).",
            "Frullare il brodo con tutti gli ingredienti, aggiungendo altro tonno e maionese: deve venire una cremina da spalmare.",
            "Disporre le fettine in un solo strato, coprirle con la salsa e con un foglio di pellicola.",
            "Mettere in frigo e servire freddo."
        ]
    },

    'baba_salato_rustico': {
        title: "Babà Salato Rustico",
        category: "Altro",
        ingredients: [
            "Farina: 500g",
            "Patate lessate e schiacciate: 250g",
            "Lievito: 25g",
            "Uova: 3",
            "Latte: 1 bicchiere",
            "Burro fuso: 100g",
            "Fontina o Caciocavallo: 200g",
            "Salame: 200g",
            "Prosciutto cotto: 200g",
            "Parmigiano: 2 cucchiai"
        ],
        steps: [
            "Impastare la farina e il lievito sciolto nel latte ed il burro.",
            "Unire le patate e tutti gli altri ingredienti tagliati a piccoli pezzi.",
            "Lasciare lievitare per circa un'ora.",
            "Rimpastare e mettere in una teglia per ciambelle.",
            "Far lievitare per circa 2 ore.",
            "Cuocere in forno caldo a 180° per 45 minuti circa."
        ]
    },

    'torta_carciofi_luana': {
        title: "Torta di Carciofi (Luana)",
        category: "Secondi",
        ingredients: [
            "Pasta Brisè:",
            "Farina: 200g",
            "Olio: 50g",
            "Burro morbido: 100g",
            "Sale: 1 pizzico",
            "Acqua: 50g",
            "Ripieno:",
            "Cuori di carciofi: 300g",
            "Ricotta: 100g",
            "Latte o Panna: 100g",
            "Uova: 2",
            "Parmigiano, Sale, Pepe"
        ],
        steps: [
            "Lavorare gli ingredienti della pasta e far riposare mezz'ora in frigo.",
            "Ungere una teglia di circa 26cm e foderare fondo e bordi con parte della pasta.",
            "Mondare i carciofi, metterli in acqua e limone, sgocciolarli e cuocerli in padella con olio, sale e pepe a fuoco basso.",
            "Passare la ricotta, unire panna/latte, uova, parmigiano, sale e pepe.",
            "Disporre i carciofi sulla pasta e mettere l'impasto di ricotta.",
            "Ricoprire con l'altro disco di pasta, ripiegare i bordi, spennellare con uovo sbattuto.",
            "Cuocere a 180° per 40 minuti."
        ]
    },

    'nocino': {
        title: "Nocino",
        category: "Liquori",
        ingredients: [
            "Noci: 24",
            "Zucchero: 330g",
            "Cannella: 1 bastoncino",
            "Alcool: 1 litro",
            "Chiodi di garofano: 24",
            "Noce moscata: 1",
            "Buccia di limone"
        ],
        steps: [
            "Tagliare le noci intere a pezzetti.",
            "Metterle nell'alcool con cannella, garofano, noce moscata e buccia di limone in un vaso di vetro.",
            "Mettere al sole per 7 giorni.",
            "Dopo si scioglie lo zucchero in mezzo bicchiere di sua acqua e si aggiunge nel vaso.",
            "Lasciar riposare per 40 giorni prima di filtrare e mettere in bottiglie."
        ]
    },

    'spaghetti_messicana': {
        title: "Spaghetti alla Messicana",
        category: "Primi",
        ingredients: [
            "Per 4 persone",
            "Melanzane: 2",
            "Carota: 1",
            "Cipolla: 1",
            "Carne tritata: 200g",
            "Pelato: poco (per colorare)",
            "Peperoncino: a piacere",
            "Spaghetti: 500g",
            "Aglio, Olio, Sale"
        ],
        steps: [
            "Tritare melanzane, carota, cipolla e carne.",
            "Far cuocere a fuoco lento aggiungendo sale e olio (circa 30 minuti), con un po' di pelato e peperoncino.",
            "Preparare gli spaghetti aglio e olio (o con preparato).",
            "Mettere gli spaghetti in una pirofila o vasetti di terracotta.",
            "Aggiungere sulla superficie il trito di carne e verdure.",
            "Mettere in forno il tutto per 10 minuti."
        ]
    },

    'risotto_pescatore': {
        title: "Risotto alla Pescatore",
        category: "Primi",
        ingredients: [
            "Vongole e Cozze",
            "Gamberi",
            "Polipi e Seppie",
            "Riso",
            "Olio, Prezzemolo, Peperoncino",
            "Pomodoro: un po'",
            "Sale"
        ],
        steps: [
            "Far bollire vongole e cozze, scolarle ma conservare l'acqua filtrata.",
            "Scaldare i gamberi con sale fin quando bollono, poi sgusciarli.",
            "Scaldare polipi e seppie (già tagliati a pezzi piccoli).",
            "Preparare in una pentola un soffritto con olio, prezzemolo e peperoncino.",
            "Aggiungere un po' di pomodoro e quando bolle aggiungere il pesce e l'acqua colata dei frutti di mare.",
            "Far cuocere il sughetto per 10 minuti.",
            "Scaldare il riso a metà cottura, quindi finirlo di cuocere nel sughetto."
        ]
    },

    'ceci_e_melanzane_gisa': {
        title: "Ceci e Melanzane (Gisa)",
        category: "Secondi",
        ingredients: [
            "Ceci: 1/2 Kg",
            "Melanzane grandi: 4",
            "Cipolle: 2",
            "Pomodori",
            "Olio, Sale, Pepe",
            "Trito: aglio, prezzemolo, basilico, salvia, rosmarino"
        ],
        steps: [
            "Tagliare le melanzane a tocchetti, lasciarle sotto sale, sciacquarle e friggerle.",
            "A parte friggere le cipolle a fettine a fuoco dolce con un po' d'acqua.",
            "In una pirofila mettere un po' d'olio, le melanzane, coprire con le cipolle, i ceci cotti e pezzetti di pomodoro.",
            "Aggiungere sale, pepe e il trito di odori.",
            "Far riscaldare sul fuoco e poi passare in forno per 45 minuti a 180°."
        ]
    },

    'crispelle': {
        title: "Crispelle (Base)",
        category: "Altro",
        ingredients: [
            "Uova: 3",
            "Farina: 125g",
            "Latte: 1/4 litro",
            "Burro: 25g",
            "Pizzico di sale"
        ],
        steps: [
            "Mescolare tutti gli ingredienti per ottenere una pastella.",
            "Fare le frittatine sottili (crepes) in padella."
        ]
    },

    'tonno_sottolio': {
        title: "Tonno Sottolio",
        category: "Altro",
        ingredients: [
            "Tonno: 1 Kg",
            "Sale: 130g",
            "Acqua: quanto basta per coprirlo",
            "Olio per conservare"
        ],
        steps: [
            "Far bollire il tonno in acqua e sale a fuoco moderato per 3 ore.",
            "Mettere ad asciugare per 24 ore su un canovaccio.",
            "Metterlo nei vasetti coperto d'olio."
        ]
    }
};
