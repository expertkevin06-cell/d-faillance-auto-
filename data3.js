KB['Opel']={e:{atmo:E('1.2/1.4 70/80/87/100','Essence',4),b10:E('1.0 Turbo 90/105','Essence turbo',2,['lspi']),b14:E('1.4 Turbo 120/140/150','Essence turbo',2,['lspi']),b16:E('1.6 Turbo 170/200','Essence turbo',3),eb2:E('1.2 Turbo 100/110/130 (EB2)','Essence turbo',2,['eb2'],['r-puretech']),mjt13:E('1.3 CDTi 75/95','Diesel',3,['mjt13']),cdti16:E('1.6 CDTi 95/110/136','Diesel',3,['opelcdti']),cdti17:E('1.7 CDTi 100/110/125/130','Diesel',2,['opel17']),cdti20:E('2.0 CDTi 130/163/170','Diesel',3),m32:E('Boîte M32','Transmission',2,['m32'])},
m:{'Corsa':['atmo','b14','b10','eb2','cdti16','cdti17','m32'],'Astra':['atmo','b10','b14','b16','cdti16','cdti17','cdti20','m32'],'Meriva':['atmo','b14','cdti16','m32'],'Mokka':['atmo','b14','cdti16'],'Zafira':['atmo','b14','cdti16','cdti17','cdti20','m32'],'Insignia':['b16','cdti16','cdti17','cdti20'],'Adam':['atmo','b10']}};
KB['Toyota']={e:{kr:E('1.0 VVT-i 69/72','Essence',4),nr:E('1.33 99/101','Essence',3),nrT:E('1.2 Turbo 116','Essence turbo',3),zr:E('1.6/1.8 VVT-i 132/140','Essence',4),hyb18:E('1.8 Hybride 122/136','Hybride',5,['toy-hyb']),hyb20:E('2.0 Hybride 184/196','Hybride',5),hyb15:E('1.5 Hybride 100/116','Hybride',4),nd:E('1.4 D-4D 90','Diesel',3),cd:E('2.0 D-4D 116/126','Diesel',2,['cd1']),ad:E('2.2 D-4D/D-CAT 150/177','Diesel',1,['ad22'],['r-2ad']),pump:E('Rappel pompe Denso','Rappel',3,[],['r-toy-pump'])},
m:{'Aygo':['kr'],'Yaris':['kr','nr','nd','hyb15'],'Auris':['nr','zr','hyb18','nd','ad'],'Corolla':['hyb18','hyb20','pump'],'Prius':['hyb18'],'C-HR':['hyb18','nrT'],'RAV4':['zr','ad','hyb20','cd','pump'],'Verso':['nr','zr','ad']}};
KB['Hyundai']={e:{kappa:E('1.0 T-GDi 100/120','Essence turbo',3),mpi:E('1.2 84 / 1.4 MPI 100','Essence',4),g14:E('1.4 T-GDi 140','Essence turbo',3),g16:E('1.6 T-GDi 177/204','Essence turbo',3),theta:E('2.0/2.4 GDI (Theta II)','Essence',1,['theta2'],['r-theta2']),crdi:E('1.6 CRDi 110/115/128/136','Diesel',3,['crdi16']),crdi2:E('2.0/2.2 CRDi 136/185/200','Diesel',3)},
m:{'i10':['mpi'],'i20':['mpi','kappa','crdi'],'i30':['g14','g16','crdi'],'ix35':['crdi','crdi2'],'Tucson':['kappa','g16','crdi','crdi2'],'Kona':['kappa','g16','crdi'],'Santa Fe':['theta','crdi2']}};
KB['Kia']={e:{kappa:E('1.0 T-GDi 100/120','Essence turbo',3),mpi:E('1.2 84 / 1.4 MPI 100','Essence',4),g14:E('1.4 T-GDi 140','Essence turbo',3),g16:E('1.6 T-GDi 177/204','Essence turbo',3),theta:E('2.0/2.4 GDI (Theta II)','Essence',1,['theta2'],['r-theta2']),crdi:E('1.6 CRDi 110/115/128/136','Diesel',3,['crdi16']),crdi2:E('2.0/2.2 CRDi 136/200','Diesel',3)},
m:{'Picanto':['mpi'],'Rio':['mpi','kappa','crdi'],'Ceed':['g14','crdi'],'Stonic':['kappa','crdi'],'XCeed':['g14','g16','crdi'],'Sportage':['g16','crdi','crdi2'],'Sorento':['crdi2','theta'],'Niro':['kappa','crdi']}};
KB['Nissan']={e:{hra0:E('1.0 DIG-T 117','Essence turbo',3),h5f:E('1.2 DIG-T 115 (H5F)','Essence turbo',1,['h5f'],['r-h5f']),h5ht:E('1.3 DIG-T 140/160','Essence turbo',4),k9k:E('1.5 dCi 90/110','Diesel',2,['k9k']),r9m:E('1.6 dCi 130','Diesel',3,['r9m']),hr16:E('1.6 94/117','Essence',4),cvt:E('CVT Xtronic','Transmission',2,['nissan-cvt'],['r-nissan-cvt'])},
m:{'Micra':['hr16','hra0','k9k'],'Note':['hra0','k9k','cvt'],'Juke':['h5f','h5ht','k9k','cvt'],'Qashqai':['h5f','h5ht','k9k','r9m','cvt'],'X-Trail':['h5ht','r9m','cvt'],'Pulsar':['h5f','h5ht','k9k']}};
KB['Fiat']={e:{fire:E('1.2/1.4 8V 69/77/95','Essence',4),twin:E('0.9 TwinAir 85/105','Essence turbo',3,['twinair']),tjet:E('1.4 T-Jet 120','Essence turbo',3),mair:E('1.4 MultiAir 105/140/170','Essence',2,['multiair']),etorq:E('1.6 E-Torq 110','Essence',3),mjt13:E('1.3 MultiJet 75/95','Diesel',3,['mjt13']),mjt16:E('1.6 MultiJet 105/120','Diesel',3,['mjt16']),mjt19:E('1.9/2.0 MultiJet','Diesel',3,['mjt16']),dual:E('Dualogic','Transmission',2,['dualogic'])},
m:{'500':['fire','twin','dual'],'500L':['twin','mair','mjt16','dual'],'500X':['mair','etorq','mjt13','mjt16'],'Panda':['fire','twin'],'Punto':['fire','twin','mjt13','mjt16'],'Tipo':['etorq','tjet','mjt16'],'Bravo':['tjet','mjt19'],'Doblo':['fire','mjt13','mjt16']}};
KB['Alfa Romeo']={e:{fire:E('1.4 78/95','Essence',4),mair:E('1.4 MultiAir 105/140/170','Essence',2,['multiair']),tjet:E('1.4 T-Jet 120','Essence turbo',3),tbi:E('1.750 TBi 200/235/240','Essence turbo',3),gme:E('2.0 Turbo 200/280','Essence turbo',4),mjt16:E('1.6 MultiJet 105/120','Diesel',3,['mjt16']),mjt22:E('2.0/2.2 MultiJet 136-210','Diesel',3)},
m:{'MiTo':['fire','mair','tjet','mjt16'],'Giulietta':['fire','mair','tjet','tbi','mjt16','mjt22'],'Giulia':['gme','mjt22'],'Stelvio':['gme','mjt22']}};
KB['Jeep']={e:{etorq:E('1.6 E-Torq 110','Essence',3),firefly:E('1.3 FireFly 120/150','Essence turbo',4),mair:E('1.4 MultiAir 140/170','Essence',2,['multiair']),mjt16:E('1.6 MultiJet 120','Diesel',3,['mjt16']),mjt20:E('2.0 MultiJet 140/170','Diesel',3),zf9:E('ZF 9HP','Transmission',2,['zf9'])},
m:{'Renegade':['etorq','firefly','mair','mjt16','mjt20','zf9'],'Compass':['firefly','mjt16','mjt20','zf9'],'Cherokee':['mjt20','zf9'],'Wrangler':['mjt20']}};
KB['Lancia']={e:{fire:E('1.2/1.4 69/77/95','Essence',4),mair:E('1.4 MultiAir 120','Essence',2,['multiair']),mjt13:E('1.3 MultiJet 95','Diesel',3,['mjt13']),mjt16:E('1.6 MultiJet 120','Diesel',3,['mjt16'])},
m:{'Ypsilon':['fire','mjt13'],'Delta':['mair','mjt16']}};
KB['Honda']={e:{ivtec:E('1.2/1.4/1.8 i-VTEC 90-142','Essence',4),vtecT:E('1.0/1.5 VTEC Turbo 129/182','Essence turbo',3),n16:E('1.6 i-DTEC 120','Diesel',3,['honda-n16']),ictdi:E('2.2 i-CTDi 140','Diesel',2,['honda-ictdi']),n22:E('2.2 i-DTEC 150','Diesel',3,['honda-n22']),ima:E('Hybride IMA','Hybride',4)},
m:{'Jazz':['ivtec','ima'],'Civic':['ivtec','vtecT','ictdi','n22','n16'],'CR-V':['ivtec','n22','n16'],'HR-V':['ivtec','n16']}};
KB['Mazda']={e:{skya:E('1.3 75/84','Essence',4),skyg15:E('1.5 Skyactiv-G 90','Essence',4),skyg20:E('2.0 Skyactiv-G 120/150/165','Essence',4),skyg25:E('2.5 Skyactiv-G 192','Essence',4),skyd15:E('1.5 Skyactiv-D 105','Diesel',3),skyd22:E('2.2 Skyactiv-D 150/175/184','Diesel',2,['skyd'],['r-skyd']),dv6:E('1.6 CRTD 115','Diesel',3,['dv6'])},
m:{'Mazda2':['skya','skyg15','skyd15'],'Mazda3':['skyg15','skyg20','skyd15','skyd22','dv6'],'Mazda6':['skyg20','skyg25','skyd22'],'CX-3':['skyg15','skyd15'],'CX-5':['skyg20','skyg25','skyd22']}};
KB['Volvo']={e:{dv6:E('1.6 D2 115','Diesel',3,['dv6']),vea34:E('2.0 D3/D4 150/181/190','Diesel',3,['volvo-egr'],['r-volvo-egr']),vea5:E('2.0 D4/D5 190/235','Diesel',3,['volvo-egr'],['r-volvo-egr']),cyl5:E('2.4 D5 205/215','Diesel',4,['volvo-5cyl']),t34:E('1.5/2.0 T3/T4 152/190','Essence turbo',3)},
m:{'C30':['dv6','cyl5'],'S40/V50':['dv6','cyl5'],'V40':['dv6','vea34','t34'],'V60':['vea34','vea5','cyl5','t34'],'XC60':['vea34','vea5','cyl5'],'V70':['cyl5','vea5'],'XC90':['vea5']}};
KB['Tesla']={e:{evS:E('Model S','Électrique',3,['tesla-mcu','tesla-susp'],['r-tesla-mcu']),evX:E('Model X','Électrique',3,['tesla-mcu','tesla-susp'],['r-tesla-mcu']),ev3:E('Model 3','Électrique',4,['tesla-caliper']),evY:E('Model Y','Électrique',4,['tesla-caliper'])},
m:{'Model S':['evS'],'Model X':['evX'],'Model 3':['ev3'],'Model Y':['evY']}};
KB['Suzuki']={e:{booster:E('1.2/1.4 BoosterJet 90/111/140','Essence',4),ddis13:E('1.3 DDiS 75','Diesel',3,['mjt13']),ddis16:E('1.6 DDiS 120','Diesel',3)},
m:{'Swift':['booster','ddis13'],'Vitara':['booster','ddis16'],'S-Cross':['booster','ddis16'],'Ignis':['booster']}};
KB['Mitsubishi']={e:{m16:E('1.6 117','Essence',4),did18:E('1.8 DI-D 116/150','Diesel',3),did22:E('2.2 DI-D 150','Diesel',3),did24:E('2.4 DI-D 154/181','Diesel',3),phev:E('PHEV','Hybride',4)},
m:{'ASX':['m16','did18','did22'],'Outlander':['m16','did22','phev'],'L200':['did24'],'Eclipse Cross':['did22']}};
KB['Subaru']={e:{boxerG:E('2.0/2.5 Boxer 150/170','Essence',4),boxerD:E('2.0 Boxer diesel 147','Diesel',2,['ee20']),cvt:E('CVT Lineartronic','Transmission',3,['lineartronic'])},
m:{'XV':['boxerG','boxerD','cvt'],'Forester':['boxerG','boxerD','cvt'],'Outback':['boxerG','cvt'],'Impreza':['boxerG','cvt']}};
KB['Smart']={e:{m132:E('1.0 71','Essence',3),m281:E('0.9 Turbo 90','Essence turbo',3)},
m:{'ForTwo':['m132','m281'],'ForFour':['m132','m281']}};
var DTC_DB={};
DTC_DB.P0008={d:'Calage distribution (banc 1)',c:['Chaîne détendue','Tendeur HS'],k:['Risque casse'],s:3};
DTC_DB.P0016={d:'Corrélation vilebrequin/AAC',c:['Chaîne décalée','Déphaseur HS'],k:['Casse moteur'],s:3};
DTC_DB.P0017={d:'Corrélation AAC échapp.',c:['Chaîne usée','Solénoïde'],k:['Dégradé'],s:3};
DTC_DB.P0087={d:'Pression rampe basse',c:['Pompe HP (limaille K9K)','Fuite injecteurs'],k:['Ratés, calages'],s:2};
DTC_DB.P0101={d:'Débitmètre incohérent',c:['MAF encrassé','Prise d\u2019air'],k:['Puissance irrégulière'],s:1};
DTC_DB.P0128={d:'Température sous seuil',c:['Thermostat ouvert'],k:['Surconso, encrassement'],s:1};
DTC_DB.P0171={d:'Mélange pauvre',c:['Prise d\u2019air','MAF','Injecteurs'],k:['Ratés, catalyseur'],s:2};
DTC_DB.P0172={d:'Mélange riche',c:['Injecteurs fuyards'],k:['Fumée noire'],s:2};
DTC_DB.P0201={d:'Circuit injecteur cyl.1',c:['Injecteur HS','Faisceau'],k:['Ratés'],s:2};
DTC_DB.P0234={d:'Surpression turbo',c:['Géométrie grippée','Wastegate'],k:['Casse turbo'],s:2};
DTC_DB.P0299={d:'Pression turbo basse',c:['Fuite suralim.','Géométrie','Turbo usé'],k:['Mode dégradé'],s:2};
DTC_DB.P0300={d:'Ratés aléatoires',c:['Bougies/bobines','Injecteurs','Compression','Distribution'],k:['Catalyseur'],s:2};
DTC_DB.P0301={d:'Raté cyl.1',c:['Bobine','Injecteur'],k:['Vibrations'],s:2};
DTC_DB.P0302={d:'Raté cyl.2',c:['Bobine','Injecteur'],k:['Vibrations'],s:2};
DTC_DB.P0303={d:'Raté cyl.3',c:['Bobine','Injecteur'],k:['Vibrations'],s:2};
DTC_DB.P0304={d:'Raté cyl.4',c:['Bobine','Injecteur'],k:['Vibrations'],s:2};
DTC_DB.P0335={d:'Capteur vilebrequin',c:['Capteur HS'],k:['Calages'],s:2};
DTC_DB.P0340={d:'Capteur AAC',c:['Capteur HS','Distribution'],k:['Démarrage long'],s:2};
DTC_DB.P0401={d:'EGR insuffisante',c:['EGR encrassée'],k:['Encrassement'],s:2};
DTC_DB.P0402={d:'EGR excessive',c:['EGR bloquée'],k:['Fumée noire'],s:2};
DTC_DB.P0420={d:'Catalyseur insuffisant',c:['Catalyseur usé'],k:['Contre-visite'],s:1};
DTC_DB.P0430={d:'Catalyseur banc 2',c:['Catalyseur HS'],k:['Contre-visite'],s:1};
DTC_DB.P0500={d:'Capteur vitesse',c:['Capteur ABS'],k:['Compteur erroné'],s:1};
DTC_DB.P0513={d:'Antidémarrage',c:['Clé','BSI/UCH'],k:['Non-démarrage'],s:1};
DTC_DB.P0520={d:'Pression d\u2019huile',c:['Crépine colmatée (PureTech !)','Pompe'],k:['CASSE MOTEUR'],s:3};
DTC_DB.P0521={d:'Pression huile incohérente',c:['Crépine/pompe'],k:['CASSE MOTEUR'],s:3};
DTC_DB.P0562={d:'Tension basse',c:['Batterie','Alternateur'],k:['Pannes cascade'],s:2};
DTC_DB.P0606={d:'Calculateur',c:['ECU','Surtension'],k:['Mode dégradé'],s:2};
DTC_DB.P0700={d:'Commande boîte',c:['Mécatronique DSG/EDC'],k:['Immobilisation'],s:3};
DTC_DB.P0730={d:'Rapport incorrect',c:['Embrayages usés','Mécatronique'],k:['Casse boîte'],s:3};
DTC_DB.P0841={d:'Pression hydraulique boîte',c:['Mécatronique'],k:['Mode secours'],s:2};
DTC_DB.P17BF={d:'Mécatronique DSG/EDC',c:['DQ200/DC4'],k:['Immobilisation'],s:3};
DTC_DB.P2002={d:'FAP sous seuil',c:['FAP saturé'],k:['Remplacement coûteux'],s:2};
DTC_DB.P2263={d:'Performance suralim.',c:['Fuites, turbo'],k:['Perte puissance'],s:2};
DTC_DB.P242F={d:'FAP restriction',c:['Régénérations interrompues'],k:['Mode dégradé'],s:2};
DTC_DB.P2463={d:'FAP suie élevée',c:['Régénération/EGR'],k:['Encrassement'],s:2};
DTC_DB.U0100={d:'Perte com. moteur',c:['CAN','Calculateur'],k:['Non-démarrage'],s:3};
DTC_DB.U0121={d:'Perte com. ABS',c:['Calculateur ABS'],k:['Aides HS'],s:2};
DTC_DB.B1000={d:'Airbag/prétensionneur',c:['Module','TAKATA à vérifier'],k:['SÉCURITÉ'],s:3};
var SYMPTOMS=[
{t:'Fumée blanche / odeur LDR',m:['fumée blanche','fumee blanche','liquide de refroidissement','mayonnaise'],o:['Joint de culasse','Refroidisseur EGR percé'],k:['Surchauffe, casse à terme'],s:3},
{t:'Fumée noire',m:['fumée noire','fumee noire'],o:['Injecteurs, EGR bloquée, FAP'],k:['Encrassement, CT'],s:2},
{t:'Fumée bleue / conso huile',m:['fumée bleue','consommation d huile','niveau d huile'],o:['Segmentation','Turbo','Défaut connu moteur'],k:['Casse possible'],s:3},
{t:'Ratés / broutage',m:['raté','ratés','broute','hoquet','tremble'],o:['Bougies/bobines','Injecteur','Compression','Distribution'],k:['Catalyseur'],s:2},
{t:'Perte puissance / mode dégradé',m:['perte de puissance','manque de puissance','mode dégradé','bridé'],o:['Turbo','EGR/FAP','Capteurs'],k:['Conduite dégradée'],s:2},
{t:'Claquement à froid / chaîne',m:['claquement','cliquetis','bruit de chaîne','chaine','bruit métallique'],o:['Chaîne détendue (H5F, EP6, N47, EA111…)'],k:['CASSE MOTEUR — expertise'],s:3},
{t:'Voyant pression huile',m:['pression d huile','voyant huile'],o:['Crépine colmatée (PureTech !)','Pompe'],k:['CASSE IMMÉDIATE — stop'],s:3},
{t:'Surchauffe',m:['surchauffe','chauffe','température monte'],o:['Thermostat','Pompe à eau (EcoBoost !)','Joint'],k:['Casse si poursuite'],s:3},
{t:'À-coups boîte',m:['à-coups','acoups','boîte','dsg','edc','powershift','patine'],o:['Mécatronique DSG/EDC/DPS6','Volant moteur'],k:['Casse boîte'],s:3},
{t:'Ne démarre pas',m:['démarre pas','demarre pas','démarrage difficile'],o:['Batterie','Antidémarrage','HP (limaille !)'],k:['Immobilisation'],s:2},
{t:'Fuite',m:['fuite','goutte','tache'],o:['Durits, joints'],k:['Casse par perte'],s:2},
{t:'Voyant moteur',m:['voyant moteur','mil'],o:['Lire les DTC'],k:['Selon code'],s:1},
{t:'Arrêt en roulant',m:['arrêt moteur','cale en roulant','se coupe'],o:['PMH','Pompe carburant'],k:['DANGER'],s:3},
{t:'FAP / régénération',m:['fap','dpf','filtre à particules'],o:['FAP saturé'],k:['Coûteux'],s:2},
{t:'Embrayage / volant moteur',m:['volant moteur','embrayage'],o:['Bi-masse, disque'],k:['Immobilisation à terme'],s:2},
{t:'Direction bruyante',m:['clac direction','bruit direction'],o:['Colonne MDPS','Crémaillère'],k:['Confort/sécurité'],s:1}];
var LEGAL_DB=[
{r:'Art. 1641 C. civ.',t:'Garantie des défauts cachés.'},
{r:'Art. 1644 C. civ.',t:'Restitution ou réduction de prix.'},
{r:'Art. 1645 C. civ.',t:'Vendeur professionnel présumé connaître les vices → dommages et intérêts.'},
{r:'Art. 1648 al.1 C. civ.',t:'2 ans depuis la découverte du vice.'},
{r:'Art. 1604 C. civ.',t:'Délivrance conforme.'},
{r:'Art. 1103-1104 C. civ.',t:'Bonne foi contractuelle.'},
{r:'Art. 1231-1 C. civ.',t:'Inexécution contractuelle (garage : obligation de résultat).'},
{r:'Art. 1240 C. civ.',t:'Responsabilité délictuelle.'},
{r:'Art. 1245 et s. C. civ.',t:'Produits défectueux (constructeur).'},
{r:'Art. L.217-3 et s. C. conso',t:'Garantie légale de conformité (professionnel).'},
{r:'Art. L.217-7 C. conso',t:'Présomption d\u2019antériorité 24 mois neuf / 12 mois occasion.'},
{r:'Art. L.217-8 et s. C. conso',t:'Réparation/remplacement, sinon réduction/résolution.'},
{r:'Art. L.121-2 et s. C. conso',t:'Pratique trompeuse (faux km).'},
{r:'Art. 313-1 C. pén.',t:'Escroquerie.'},
{r:'Art. 223-1 C. pén.',t:'Mise en danger d\u2019autrui.'},
{r:'Art. 145 C. pr. civ.',t:'Référé-expertise.'},
{r:'Art. 750-1 C. pr. civ.',t:'Tentative amiable obligatoire ≤ 5000 €.'},
{r:'Art. L.611-1 et s. C. conso',t:'Médiateur consommation.'},
{r:'Règl. (UE) 2023/988',t:'Rappels de produits dangereux (Rappel Conso).'}];
window.__D3=true;
