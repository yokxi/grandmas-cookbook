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
    },

    'limoncello_melissa': {
        title: "Limoncello alla Melissa",
        category: "Altro",
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
        category: "Altro",
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
        category: "Altro",
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
        category: "Altro",
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
        category: "Altro",
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
        category: "Altro",
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
            "Panna: 1/4 (da montare o fresca)",
            "Farina: 1/4 (presumibilmente di etto/litro? o cucchiai? nel dubbio usiamo q.b. per addensare se non specificato meglio, ma seguiamo il testo)",
            "Savoiardi",
            "Cioccolata fondente"
        ],
        steps: [
            "Battere le uova con lo zucchero.",
            "Aggiungere il latte bollente.",
            "Mettere il composto sul fuoco e lasciarlo addensare.",
            "Quando è freddo aggiungere il caffè e la panna (o farina se inteso come addensante postumo, ma improbabile, verosimilmente panna per arricchire la crema fredda).",
            "Bagnare i savoiardi nella crema (o bagna apposita se sottinteso) e allinearli in un piatto fino a formare una piramide.",
            "Lasciare per qualche ora nel frigo.",
            "Al momento di servirli sciogliere la cioccolata fondente e metterla sopra."
        ]
    }
};
