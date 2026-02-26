/* eslint-disable no-unused-vars */
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Estoque', [
      
                {
                    descricao_estq: "ACEBROFILINA 25MG/5ML PED 120ML",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 7
                },
                {
                    descricao_estq: "ACEBROFILINA 50MG/5ML ADT 120ML",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 9
                },
                {
                    descricao_estq: "ACECLOFENACO 100MG C/12 COMP***",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 2
                },
                {
                    descricao_estq: "ACETILCISTEINA 100MG/16 SACH* #",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 12
                },
                {
                    descricao_estq: "ACETILCISTEINA 200MG C/16 ENV",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 12
                },
                {
                    descricao_estq: "ACETILCISTEINA 600 MG C/16 ENV*",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 0
                },
                {
                    descricao_estq: "ACETILCISTEINA SUSP ADT 120 ML",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 0
                },
                {
                    descricao_estq: "ACETILCISTEINA SUSP PED 120 ML",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 0
                },
                {
                    descricao_estq: "ACIDO ACETIL100MG 30CPREV",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 23
                },
                {
                    descricao_estq: "ACIDO ACETIL100MG 60CPREV",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 0
                },
                {
                    descricao_estq: "ALENDRONATO DE SODIO 70 MG C/4 CPR",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 1
                },
                {
                    descricao_estq: "ALGESTONA AC+EST150MG 1AMP #",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 0
                },
                {
                    descricao_estq: "ALPRAZOLAM 1MG 30CPR #",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 173
                },
                {
                    descricao_estq: "ALPRAZOLAM 2MG 30CPR",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 0
                },
                {
                    descricao_estq: "AMOXICILINA 250 MG SUSP 150 ML",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 15
                },
                {
                    descricao_estq: "AMOXICILINA 400 MG SUSP 100 ML",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 35
                },
                {
                    descricao_estq: "AMOXICILINA 500 MG C/21 CAPS",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 6
                },
                {
                    descricao_estq: "AMOXICILINA 875 MG C/14 COMP #",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 9
                },
                {
                    descricao_estq: "AMOXICILINA+CLAVU 875+125MG C/14( 9",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 4
                },
                {
                    descricao_estq: "AMOXICILINA+CLAVU DE POT400 MG + 57",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 12
                },
                {
                    descricao_estq: "AMPICILINA 500 MG C/12 CAPS",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 0
                },
                {
                    descricao_estq: "ANASTROZOL 1MG C/ 30",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 0
                },
                {
                    descricao_estq: "ATENOLOL+CLORTALIDONA 100/25 MG C/2",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 3
                },
                {
                    descricao_estq: "ATENOLOL+CLORTALIDONA 50/12,5MG C/3",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 13
                },
                {
                    descricao_estq: "ATORVASTATINA  10MG C/30 COMP",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 14
                },
                {
                    descricao_estq: "ATORVASTATINA 20MG C/30 COMP",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 28
                },
                {
                    descricao_estq: "ATORVASTATINA 40MG C/30 COMP",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 20
                },
                {
                    descricao_estq: "AXETILCEFUROXIMA 250MG C/10 CPR",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 3
                },
                {
                    descricao_estq: "AXETILCEFUROXIMA 500MG C/10 CPR",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 0
                },
                {
                    descricao_estq: "AXETILCEFUROXIMA 500MG C/14 CPR",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 14
                },
                {
                    descricao_estq: "AZITROMICINA 500 MG C/03 COMP",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 301
                },
                {
                    descricao_estq: "AZITROMICINA 500MG C/05 COMP",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 0
                },
                {
                    descricao_estq: "AZITROMICINA 600 MG SUSP 15ML",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 0
                },
                {
                    descricao_estq: "AZITROMICINA 900 MG SUSP 22,5ML",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 30
                },
                {
                    descricao_estq: "BETA+GENT+TOLN+CLIO CREME 20 G",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 11
                },
                {
                    descricao_estq: "BETA+GENT+TOLN+CLIO POMADA 20G",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 6
                },
                {
                    descricao_estq: "BETAISTINA 16MG C/30 COMP",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 19
                },
                {
                    descricao_estq: "BETAISTINA 24MG C/30 CPR #",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 25
                },
                {
                    descricao_estq: "BETAMET+GENTAM CR 30G",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 11
                },
                {
                    descricao_estq: "BETAMET+GENTAM POM 30G",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 10
                },
                {
                    descricao_estq: "BETAMETASONA + FOS DE BETAME INJ C/",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 6
                },
                {
                    descricao_estq: "BILASTINA 20MG C/15 CPR",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 5
                },
                {
                    descricao_estq: "BILASTINA 20MG C/30 CPR 100%",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 0
                },
                {
                    descricao_estq: "BUPROPIONA 150MG C/30 CPR",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 7
                },
                {
                    descricao_estq: "CABERGOLINA 0,5MG C/02",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 0
                },
                {
                    descricao_estq: "CABERGOLINA 0,5MG C/08 CPR",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 1
                },
                {
                    descricao_estq: "CARBONATO DE LITIO 300MG C/60( 100",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 24
                },
                {
                    descricao_estq: "CEFADROXILA 250 MG SUSP 100 ML( 100",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 5
                },
                {
                    descricao_estq: "CEFADROXILA 500 MG C/8 COMP #",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 215
                },
                {
                    descricao_estq: "CEFTRIAXONA SODICA 1 GR C/1 ( 100 )",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 7
                },
                {
                    descricao_estq: "CEFTRIAXONA SODICA 500 MG IM C/1 AM",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 0
                },
                {
                    descricao_estq: "CELECOXIBE 200MG C/10 CAPS",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 38
                },
                {
                    descricao_estq: "CETOCONAZOL + BETAMETAS NEOMICI",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 3
                },
                {
                    descricao_estq: "CETOCONAZOL+BETA+SULF+NEOMI CR* 30G",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 3
                },
                {
                    descricao_estq: "CETOCONAZOL+BETAMETASONA CREME 30G",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 3
                },
                {
                    descricao_estq: "CETOCONAZOL+BETAMETASONA POMADA 30G",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 3
                },
                {
                    descricao_estq: "CETOPROFENO 150MG C/10 COMP",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 213
                },
                {
                    descricao_estq: "CETOPROFENO GOTAS 20 ML",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 6
                },
                {
                    descricao_estq: "CETOROLACO 10MG C/10CPR SUB",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 11
                },
                {
                    descricao_estq: "CICLOBENZAPRINA 10 MG C/15 COMP",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 3
                },
                {
                    descricao_estq: "CICLOBENZAPRINA 5 MG C/15 COMP",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 1
                },
                {
                    descricao_estq: "CICLOBENZAPRINA 5 MG C/30 CPR",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 2
                },
                {
                    descricao_estq: "CILOSTAZOL 100MG C/30 COMP",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 11
                },
                {
                    descricao_estq: "CILOSTAZOL 50MG C/30 COMP",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 6
                },
                {
                    descricao_estq: "CILOSTAZOL 50MG C/60 COMP",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 21
                },
                {
                    descricao_estq: "CIPROFIBRATO 100MG C/30 CPRS #",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 31
                },
                {
                    descricao_estq: "CIPROFLOXACINO 500 MG C/14 CAPS",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 40
                },
                {
                    descricao_estq: "CITALOPRAM 20MG C/30 COMP  ESTE",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 67
                },
                {
                    descricao_estq: "CLONAZEPAM 2MG C/30 COMP",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 108
                },
                {
                    descricao_estq: "CLOPIDOGREL 75 MG C/30",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 68
                },
                {
                    descricao_estq: "DAPAGLIFLOZINA 10MG C/30CPR",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 36
                },
                {
                    descricao_estq: "DESLORATADINA 0,5MG/ML 60ML",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 45
                },
                {
                    descricao_estq: "DESLORATADINA 5MG C/10CPR 5*",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 33
                },
                {
                    descricao_estq: "DESOGESTREL + ETINIL. 150/30 MCG C/",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 3
                },
                {
                    descricao_estq: "DESOGESTREL+ ETINIL.150/20 MCG C/21",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 2
                },
                {
                    descricao_estq: "DESVENLAFAXINA 100MG C/30( 100 )",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 27
                },
                {
                    descricao_estq: "DESVENLAFAXINA 50MG C/30(100%)",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 1
                },
                {
                    descricao_estq: "DIENOGESTE 2MG C/30 COMP( 100 )",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 29
                },
                {
                    descricao_estq: "DIVALPROATO DE SODIO 250MG C/30( 10",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 5
                },
                {
                    descricao_estq: "DIVALPROATO DE SODIO 500MG C/30( 10",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 13
                },
                {
                    descricao_estq: "DIVALPROATO DE SODIO 500MG C/60 CPR",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 0
                },
                {
                    descricao_estq: "DOMPERIDONA +SER DOSA 1MG/100ML #",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 4
                },
                {
                    descricao_estq: "DOMPERIDONA 10MG C/30CPR #",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 38
                },
                {
                    descricao_estq: "DOMPERIDONA 10MG C/60 CPR",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 13
                },
                {
                    descricao_estq: "DOXAZOSINA 2MG C/30",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 20
                },
                {
                    descricao_estq: "DOXAZOSINA 4MG C/30",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 2
                },
                {
                    descricao_estq: "DROSPIREN+ETINILEST 3MG+0,02 C/24",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 21
                },
                {
                    descricao_estq: "DROSPIREN+ETINILEST 3MG+0,02 CX C/3",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 31
                },
                {
                    descricao_estq: "DROSPIREN+ETINILEST 3MG+0,03 C/28 C",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 2
                },
                {
                    descricao_estq: "DULOXETINA 60MG C/30 CPR( 73% ) NAO",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 0
                },
                {
                    descricao_estq: "ESCITALOPRAM 10MG C/30",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 12
                },
                {
                    descricao_estq: "ESCITALOPRAM 15MG C/30",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 73
                },
                {
                    descricao_estq: "ESCITALOPRAM 20MG C/30 CPR #",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 82
                },
                {
                    descricao_estq: "ESCITALOPRAM 20MG/ML GOTAS",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 2
                },
                {
                    descricao_estq: "ESPIRONOLACTONA 25 MG C/30 #",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 60
                },
                {
                    descricao_estq: "ESPIRONOLACTONA 50MG C/30",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 5
                },
                {
                    descricao_estq: "ETODOLACO 500MG 14CPR",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 0
                },
                {
                    descricao_estq: "FENTICONAZOL CREM VAG 40G #",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 3
                },
                {
                    descricao_estq: "FEXOFENADINA 120 MG C/10 CPRV",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 2
                },
                {
                    descricao_estq: "FEXOFENADINA 180 MG C/10 CPRV",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 1
                },
                {
                    descricao_estq: "FEXOFENADINA PED 150ML",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 1
                },
                {
                    descricao_estq: "FEXOFENADINA PED 60ML",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 3
                },
                {
                    descricao_estq: "FLUOXETINA 10 MG C/28 COMP",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 0
                },
                {
                    descricao_estq: "FLUOXETINA 20MG C/30 CAPS",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 287
                },
                {
                    descricao_estq: "FLUOXETINA 20MG C/60 CAPS",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 0
                },
                {
                    descricao_estq: "GABAPENTINA 300 MG C/30 CAPS",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 2
                },
                {
                    descricao_estq: "GABAPENTINA 400 MG C/30 CAPS",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 0
                },
                {
                    descricao_estq: "GLIMEPIRIDA 2MG C/30  #",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 0
                },
                {
                    descricao_estq: "HIDROXICLOROQUINA 400MG C/30 COMP",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 7
                },
                {
                    descricao_estq: "HIDROXIZINA SUSP 120ML",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 6
                },
                {
                    descricao_estq: "IBANDRONATO DE SODIO 150MG C/1",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 1
                },
                {
                    descricao_estq: "INDAPAMIDA 1,5MG C/30 #",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 40
                },
                {
                    descricao_estq: "INTRA GEL 50G",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 0
                },
                {
                    descricao_estq: "ITRACONAZOL 100 MG C/15 COMP",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 3
                },
                {
                    descricao_estq: "ITRACONAZOL 100MG C/4 CAPS (UNIDADE",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 12
                },
                {
                    descricao_estq: "LAMOTRIGINA 100MG C/30",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 35
                },
                {
                    descricao_estq: "LAMOTRIGINA 25MG C/30 COMP",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 3
                },
                {
                    descricao_estq: "LAMOTRIGINA 50MG C/30 #",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 32
                },
                {
                    descricao_estq: "LEVETIRACETAM 250MG C/30 COMPRIMIDO",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 16
                },
                {
                    descricao_estq: "LEVETIRACETAM 500MG C/30 COMPRIMIDO",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 9
                },
                {
                    descricao_estq: "LEVETIRACETAM SOL 150ML",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 2
                },
                {
                    descricao_estq: "LEVOCETIRIZINA 5MG 10 CPR",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 17
                },
                {
                    descricao_estq: "LEVOFLOXACINO 500 MG  C/7",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 10
                },
                {
                    descricao_estq: "LEVOFLOXACINO 500 MG C/10",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 37
                },
                {
                    descricao_estq: "LEVOFLOXACINO 750 MG  C/7",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 14
                },
                {
                    descricao_estq: "LEVOFLOXACINO 750 MG C/5",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 20
                },
                {
                    descricao_estq: "LISDEXANFETAMINA 30MG C/30 CAPS",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 2
                },
                {
                    descricao_estq: "LISDEXANFETAMINA 50MG C/30 CAPS",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 1
                },
                {
                    descricao_estq: "LISDEXANFETAMINA 70MG C/30 CAPS",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 1
                },
                {
                    descricao_estq: "LOSARTANA POTASSICA 50MG C/30",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 180
                },
                {
                    descricao_estq: "LOSARTANA+HIDRO 100+25MG C/30",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 18
                },
                {
                    descricao_estq: "LOSARTANA+HIDRO 50+12,5MG C/30",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 50
                },
                {
                    descricao_estq: "MAL.DE DEXCLOFENIRAMINA + BET.SUSP",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 0
                },
                {
                    descricao_estq: "MELOXICAM 15MG  C/10",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 10
                },
                {
                    descricao_estq: "MELOXICAM 7,5 MG C/10",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 0
                },
                {
                    descricao_estq: "MEMANTINA 10MG C/30 CPR( 100 )",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 23
                },
                {
                    descricao_estq: "METILFENIDATO 10MG C/30 COMP",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 113
                },
                {
                    descricao_estq: "MOMETASONA C/120 DOSES 17,5 ML",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 38
                },
                {
                    descricao_estq: "MOMETASONA C/60 DOSES 17,5 ML(100%)",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 0
                },
                {
                    descricao_estq: "MOXIFLOXACINO 400MG C/5 COMP( 100 )",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 3
                },
                {
                    descricao_estq: "MOXIFLOXACINO 400MG C/7 COMP( 100 )",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 3
                },
                {
                    descricao_estq: "NITAZOXANIDA 45ML",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 14
                },
                {
                    descricao_estq: "NITAZOXANIDA 500MG C/06 CPR",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 27
                },
                {
                    descricao_estq: "NORETISTERONA+ESTRADIOL INJ 1ML",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 4
                },
                {
                    descricao_estq: "OLANZAPINA 10MG C/30 COMP ( 100 )",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 66
                },
                {
                    descricao_estq: "OLANZAPINA 2,5MG C/30 COMP",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 45
                },
                {
                    descricao_estq: "OLANZAPINA 5MG C/30 COMP",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 61
                },
                {
                    descricao_estq: "OLMESARTANA 20 MG C/30( 100 )",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 21
                },
                {
                    descricao_estq: "OLMESARTANA 40 MG C/30( 100 )",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 29
                },
                {
                    descricao_estq: "OLMESARTANA+HID 20/12,5 MG C/30( 10",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 85
                },
                {
                    descricao_estq: "OLMESARTANA+HID 40/12,5 MG C/30( 10",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 63
                },
                {
                    descricao_estq: "OLMESARTANA+HID40+25MG C/30(100)",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 55
                },
                {
                    descricao_estq: "PANTOPRAZOL 20 MG C/28 COMP",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 6
                },
                {
                    descricao_estq: "PANTOPRAZOL 40 MG C/28  #",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 65
                },
                {
                    descricao_estq: "PARACETAMOL+CODEINA C/12 MAXIMO( 06",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 162
                },
                {
                    descricao_estq: "PAROXETINA 20 MG C/30 CAPS #",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 117
                },
                {
                    descricao_estq: "PITAVASTATINA 2MG C/30",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 2
                },
                {
                    descricao_estq: "PRAMIPE 0,375MG C/30 COMP",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 1
                },
                {
                    descricao_estq: "PREDNISOLONA 11MG/ML GOTAS 20ML",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 8
                },
                {
                    descricao_estq: "PREDNISOLONA 20MG C/10 COMP",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 46
                },
                {
                    descricao_estq: "PREDNISOLONA 3MG SUSP 120ML",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 1
                },
                {
                    descricao_estq: "PREDNISOLONA 40MG C/7 COMP",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 12
                },
                {
                    descricao_estq: "PREGABALINA 150MG C/30 CAPS",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 95
                },
                {
                    descricao_estq: "PREGABALINA 75MG 30CAPS",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 216
                },
                {
                    descricao_estq: "PROMESTRIENO CR VAG ( 100 )",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 15
                },
                {
                    descricao_estq: "PROPAFENONA 300MG C/30 CPS",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 7
                },
                {
                    descricao_estq: "QUETIAPINA 25MG C/30",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 99
                },
                {
                    descricao_estq: "QUETIAPINA 50MG C/30 CPR (58%)",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 26
                },
                {
                    descricao_estq: "RISEDRONATO SODICO 150MG C/1 CPR",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 0
                },
                {
                    descricao_estq: "RISPERIDONA 1MG C/30 COMP #",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 119
                },
                {
                    descricao_estq: "RISPERIDONA 2MG C/30 COMP",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 154
                },
                {
                    descricao_estq: "RISPERIDONA 3MG C/30 COMP",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 57
                },
                {
                    descricao_estq: "RIVAROXABANA 10MG C/30 COMP (XARELT",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 4
                },
                {
                    descricao_estq: "RIVAROXABANA 15MG C/30 COMP (XARELT",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 1
                },
                {
                    descricao_estq: "RIVAROXABANA 20MG C/30 COMP",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 11
                },
                {
                    descricao_estq: "ROSUVASTATINA CALCICA 10 MG C/30 CA",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 111
                },
                {
                    descricao_estq: "ROSUVASTATINA CALCICA 20 MG C/30",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 0
                },
                {
                    descricao_estq: "ROSUVASTATINA CALCICA 5 MG C/30 CPR",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 12
                },
                {
                    descricao_estq: "SERTRALINA 100MG C/30 CPR",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 74
                },
                {
                    descricao_estq: "SERTRALINA 25MG C/30 ( 100 )",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 48
                },
                {
                    descricao_estq: "SERTRALINA 50MG C/30 #",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 3
                },
                {
                    descricao_estq: "SILDENAFILA 50MG UNIDADE #",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 81
                },
                {
                    descricao_estq: "SIMETICONA 125MG C/10 CAP",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 4
                },
                {
                    descricao_estq: "TADALAFILA 20MG UNIDADE(EUROFARMA)",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 43
                },
                {
                    descricao_estq: "TADALAFILA 5MG C/30 #",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 925
                },
                {
                    descricao_estq: "TANSULOSINA 0,4 MG C/30 CAPS( 100 )",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 1
                },
                {
                    descricao_estq: "TINIDAZOL+MICONAZOL CRE VAG 45G",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 3
                },
                {
                    descricao_estq: "TOPIRAMATO 100MG C/60 ( 100 )",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 2
                },
                {
                    descricao_estq: "TOPIRAMATO 25MG C/60( 100 )",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 21
                },
                {
                    descricao_estq: "TOPIRAMATO 50MG C/60( 100 )",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 11
                },
                {
                    descricao_estq: "TRAMADOL 100MG/ML GOTAS 10ML",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 24
                },
                {
                    descricao_estq: "TRAMADOL 50MG C/10",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 100
                },
                {
                    descricao_estq: "TRAMADOL+PARACETAMOL 37,5+325MG C/1",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 133
                },
                {
                    descricao_estq: "TRAZODONA 100MG C/30 COMP",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 23
                },
                {
                    descricao_estq: "TRAZODONA 50MG C/60 ( 100 )",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 30
                },
                {
                    descricao_estq: "TRIANCINOLONA OROBASE POM 10GR",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 13
                },
                {
                    descricao_estq: "TRIANCINOLONA+ASS CRE 30GR #",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 0
                },
                {
                    descricao_estq: "TRIANCINOLONA+ASS POM 30GR #",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 0
                },
                {
                    descricao_estq: "TRIMEBUTINA 200MG C/30 ( 100 )",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 8
                },
                {
                    descricao_estq: "TRIMETAZIDINA 35MG 30CP( 100 )",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 1
                },
                {
                    descricao_estq: "VALACICLOVIR 500MG C/10 CPR",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 5
                },
                {
                    descricao_estq: "VELERATO DE BETAMETASONA CREME",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 0
                },
                {
                    descricao_estq: "VENLAFAXINA 150MG C/30 COMP",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 33
                },
                {
                    descricao_estq: "VENLAFAXINA 37,5MG C/30",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 61
                },
                {
                    descricao_estq: "VENLAFAXINA 75MG C/30 COMP",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 46
                },
                {
                    descricao_estq: "ZOLPIDEM 10MG C/30 COMP",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 169
                },
                {
                    descricao_estq: "ZOLPIDEM SL 5MG C/30 COMP( 75 )",
                    fabricante_estq: "EUROFARMA - GEN",
                    quantidade_estq: 4
                },
         
    ]);
    },
  
    async down(queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Estoque');
    },
  };
  