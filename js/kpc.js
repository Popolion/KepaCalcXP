function LoadFile() {
				sessionStorage.setItem("langue", "francais")
				if(!window.sessionStorage) {
					alert("session storage non supporté");
					return;
				}
				
				var oFrame = document.getElementById("frmFile");
				var strRawContents = oFrame.contentWindow.document.body.childNodes[0].innerHTML;
				while (strRawContents.indexOf("\r") >= 0)
					strRawContents = strRawContents.replace("\r", "");
				var arrLines = strRawContents.split("\n");
				for (var i = 0; i < arrLines.length; i++) {
					var arrWords = arrLines[i].split("\t");
					var e = "t";
					if(!sessionStorage.getItem(arrWords[0]-1, arrWords[1])) {
						sessionStorage.setItem(arrWords[0]-1, arrWords[1]);
						sessionStorage.setItem(e.concat(arrWords[0]-1), arrWords[2]);
					}
				}
			}
			
			function LoadFile2() {
				if(!window.sessionStorage) {
					return;
				}
				var oFrame = document.getElementById("frmFile2");
				var strRawContents = oFrame.contentWindow.document.body.childNodes[0].innerHTML;
				while (strRawContents.indexOf("\r") >= 0)
					strRawContents = strRawContents.replace("\r", "");
				var arrLines = strRawContents.split("\n");
				var rank = 1;
				for (var i = 0; i < arrLines.length; i++) {
					var arrWords = arrLines[i].split("\t");
					
					if(i+8 > arrLines.length) {
						// ajout de l'exp max des rank
						sessionStorage.setItem("classe" + arrWords[0], arrWords[1])
						sessionStorage.setItem("classeT" + arrWords[0], arrWords[2])
					} else {
						// ajout de l'exp par rank
						var lvl = arrWords[0]-1
						sessionStorage.setItem(rank + "_" + lvl, arrWords[1])
						sessionStorage.setItem("t" + rank + "_" + lvl, arrWords[2])
						if(arrWords[0] == 15) {
							rank += 1
						}
					}
				}
			}
			
			function translateFr() {
				document.getElementById("createur").innerHTML = "par speedaxter"
				document.getElementById("lvlEstim").innerHTML = "Niveau voulu :"
				document.getElementById("cExp").innerHTML = "Cartes d'exp :"
				document.getElementById("level").placeholder = "Ton niveau"
				document.getElementById("level_p").placeholder = "% du niveau"
				document.getElementById("levelC").placeholder = "Ton niveau de classe"
				document.getElementById("levelC_p").placeholder = "% du niveau de classe"
				document.getElementById("rank").placeholder = "Rang de classe"
				document.getElementById("estimate").placeholder = "Niveau voulu"
				document.getElementById("c1").placeholder = "Carte d'exp Lv1"
				document.getElementById("c2").placeholder = "Carte d'exp Lv2"
				document.getElementById("c3").placeholder = "Carte d'exp Lv3"
				document.getElementById("c4").placeholder = "Carte d'exp Lv4"
				document.getElementById("c5").placeholder = "Carte d'exp Lv5"
				document.getElementById("c6").placeholder = "Carte d'exp Lv6"
				document.getElementById("c7").placeholder = "Carte d'exp Lv7"
				document.getElementById("c8").placeholder = "Carte d'exp Lv8"
				document.getElementById("c9").placeholder = "Carte d'exp Lv9"
				document.getElementById("c10").placeholder = "Carte d'exp Lv10"
				document.getElementById("c11").placeholder = "Carte d'exp Lv11"
				document.getElementById("c12").placeholder = "Carte d'exp Lv12"
				document.getElementById("bouton").value = "Valider"
				sessionStorage.setItem("langue","francais")
			}
			
			function translateUs() {
				document.getElementById("createur").innerHTML = "by speedaxter"
				document.getElementById("lvlEstim").innerHTML = "Target level :"
				document.getElementById("cExp").innerHTML = "Exp Card :"
				document.getElementById("level").placeholder = "Your level character"
				document.getElementById("level_p").placeholder = "% level"
				document.getElementById("levelC").placeholder = "Your level class"
				document.getElementById("levelC_p").placeholder = "% level class"
				document.getElementById("rank").placeholder = "Your rank class"
				document.getElementById("estimate").placeholder = "Level target"
				document.getElementById("c1").placeholder = "Lv1 exp Card"
				document.getElementById("c2").placeholder = "Lv2 exp Card"
				document.getElementById("c3").placeholder = "Lv3 exp Card"
				document.getElementById("c4").placeholder = "Lv4 exp Card"
				document.getElementById("c5").placeholder = "Lv5 exp Card"
				document.getElementById("c6").placeholder = "Lv6 exp Card"
				document.getElementById("c7").placeholder = "Lv7 exp Card"
				document.getElementById("c8").placeholder = "Lv8 exp Card"
				document.getElementById("c9").placeholder = "Lv9 exp Card"
				document.getElementById("c10").placeholder = "Lv10 exp Card"
				document.getElementById("c11").placeholder = "Lv11 exp Card"
				document.getElementById("c12").placeholder = "Lv12 exp Card"
				document.getElementById("bouton").value = "Accept"
				sessionStorage.setItem("langue","english")
			}
			
			function estimate() {
				// Actualise à chaque fois
				document.getElementById("resultatEstimate").innerHTML = ""
				
				if(!document.getElementById("estimate").value == "") {
					lvlEstimate = parseFloat(document.info.estimate.value)
					level = parseFloat(document.info.level.value)
					level_p = parseFloat(document.info.level_p.value)
					
					if(lvlEstimate > level && lvlEstimate < 280) {
						/****** Calcul ******/
						var t = "t"
						
						// Experience actuel
						var expActu = parseFloat(sessionStorage.getItem(level.toString())) * parseFloat(level_p/100);
						var tExpActu = parseFloat(sessionStorage.getItem(t.concat(level))) - parseFloat(sessionStorage.getItem(level))
						expActu += tExpActu
						expActu = expActu.toFixed()
						
						// Experience à atteindre
						var lvlBut = parseFloat(sessionStorage.getItem(t.concat(lvlEstimate))) - parseFloat(sessionStorage.getItem(lvlEstimate))
						
						// ajoute l'exp des cartes a expActu
						cl1 = parseFloat(document.cartes.c1.value)
						cl2 = parseFloat(document.cartes.c2.value)
						cl3 = parseFloat(document.cartes.c3.value)
						cl4 = parseFloat(document.cartes.c4.value)
						cl5 = parseFloat(document.cartes.c5.value)
						cl6 = parseFloat(document.cartes.c6.value)
						cl7 = parseFloat(document.cartes.c7.value)
						cl8 = parseFloat(document.cartes.c8.value)
						cl9 = parseFloat(document.cartes.c9.value)
						cl10 = parseFloat(document.cartes.c10.value)
						cl11 = parseFloat(document.cartes.c11.value)
						cl12 = parseFloat(document.cartes.c12.value)
						
						// Ajout des cartes d'exp
						var expCard = 0
						if(!isNaN(cl1)) {
							expCard += cl1*500
						}
						if(!isNaN(cl2)) {
							expCard += cl2*2686
						}
						if(!isNaN(cl3)) {
							expCard += cl3*8442
						}
						if(!isNaN(cl4)) {
							expCard += cl4*22860
						}
						if(!isNaN(cl5)) {
							expCard += cl5*24571
						}
						if(!isNaN(cl6)) {
							expCard += cl6*60312
						}
						if(!isNaN(cl7)) {
							expCard += cl7*142150
						}
						if(!isNaN(cl8)) {
							expCard += cl8*209334
						}
						if(!isNaN(cl9)) {
							expCard += cl9*237943
						}
						if(!isNaN(cl10)) {
							expCard += cl10*541023
						}
						if(!isNaN(cl11)) {
							expCard += cl11*985061
						}
						if(!isNaN(cl12)) {
							expCard += cl12*1344829
						}
						
						expActu = parseInt(expActu) + expCard
						
						if(lvlBut < expActu) {
							var c1 = 0; var c2 = 0; var c3 = 0; var c4 = 0; var c5 = 0; var c6 = 0; var c7 = 0; var c8 = 0; var c9 = 0; var c10 = 0; var c11 = 0; var c12 = 0;
						} else {
							var difference = lvlBut - expActu
							
							var c1 = difference / 500
							c1 = Math.ceil(c1)
							var c2 = difference / 2686
							c2 = Math.ceil(c2)
							var c3 = difference / 8442
							c3 = Math.ceil(c3)
							var c4 = difference / 22860
							c4 = Math.ceil(c4)
							var c5 = difference / 24571
							c5 = Math.ceil(c5)
							var c6 = difference / 60312
							c6 = Math.ceil(c6)
							var c7 = difference / 142150
							c7 = Math.ceil(c7)
							var c8 = difference / 209334
							c8 = Math.ceil(c8)
							var c9 = difference / 237943
							c9 = Math.ceil(c9)
							var c10 = difference / 541023
							c10 = Math.ceil(c10)
							var c11 = difference / 985061
							c11 = Math.ceil(c11)
							var c12 = difference / 1344829
							c12 = Math.ceil(c12)
						}
						
						var j = 0
						var differenceLvl = lvlBut - expCard
						
						obj = document.getElementById("resultatE");
						obj.style.display = "inline";
						
						if(difference < differenceLvl) {
							// Cherche le niveau obtenu
							for (var i = 1; i < 280; i++) {
								if(differenceLvl < sessionStorage.getItem(t.concat(i))) {
									j = i
									i = 280
								}
							}
							
							var expJ = sessionStorage.getItem(t.concat(j)) - sessionStorage.getItem(j)
							var expPourcent = differenceLvl - expJ
							var pourcent = expPourcent / sessionStorage.getItem(j)
							pourcent = pourcent *100
							pourcent = pourcent.toFixed(2)
							
							if(sessionStorage.getItem("langue") == "english") {
								// tableau : Carte Lv1 / c1 / c1*500
								//			 Carte Lv2 / c2 / c2*2686 ...
								if(expCard > 0) {
									document.getElementById("resultatEstimate").innerHTML = "You need the level " +j+ " and " +pourcent+ "% or : <br />"
								}
								document.getElementById("resultatEstimate").innerHTML += "To reach the lvl&nbsp;" +lvlEstimate+", you will need :<br/>"+c1+ "&nbsp;card lvl 1, "+c2+"&nbsp; card lvl 2, "+c3+ "&nbsp;card lvl 3, "+c4+ "&nbsp;card lvl 4, "+c5+ "&nbsp;card lvl 5, "+c6+ "&nbsp;card lvl 6, "+c7+"&nbsp;cards 7, "+c8+ "&nbsp;card lvl 8, "+c9+ "&nbsp;card lvl 9, "+c10+ "&nbsp;card lvl 10, "+c11+ "&nbsp;card lvl 11 et "+c12+ "&nbsp;card lvl 12."
							}
							else {
								if(expCard > 0) {
									document.getElementById("resultatEstimate").innerHTML = "Il te faudra atteindre le niveau " +j+ " &agrave; "+expPourcent+ ", " +pourcent+ "% ou alors : <br />"
								}
								document.getElementById("resultatEstimate").innerHTML += "Pour acc&eacute;der au niveau&nbsp;" +lvlEstimate+", vous aurez besoin de :<br/>"+c1+ "&nbsp;cartes niveau 1, "+c2+"&nbsp; cartes niveau 2, "+c3+ "&nbsp;cartes niveau 3, "+c4+ "&nbsp;cartes niveau 4, "+c5+ "&nbsp;cartes niveau 5, "+c6+ "&nbsp;cartes niveau 6, "+c7+"&nbsp;cartes niveau 7, "+c8+ "&nbsp;cartes niveau 8, "+c9+ "&nbsp;cartes niveau 9, "+c10+ "&nbsp;cartes niveau 10, "+c11+ "&nbsp;cartes niveau 11 et "+c12+ "&nbsp;cartes niveau 12."
							}
							
						} else {
							j = level
							
							if(sessionStorage.getItem("langue") == "english") {
								document.getElementById("resultatEstimate").innerHTML = "Congratulations ! You can use all your cards for obtains your level target !"
							}
							else {
								document.getElementById("resultatEstimate").innerHTML = "Bravo ! Tu peux utiliser toutes tes cartes pour atteindre ton objectif de niveau !"
							}
						}
						
						document.getElementById("resultatEstimate").innerHTML += "<br/>debug : " + lvlBut + "<" + differenceLvl + ", " + expCard + ", " + j + ", " + expPourcent + ", " + pourcent
						
						
						
					} else {
						
					}
				} else {
					obj = document.getElementById("resultatE");
					obj.style.display = "none";
				}
			}
			
			function calculate(){
				if (document.getElementById('level').checkValidity() && document.getElementById('level_p').checkValidity()
				 && document.getElementById('levelC').checkValidity() && document.getElementById('levelC_p').checkValidity()
				 && document.getElementById('rank').checkValidity()) {
				
					// Ajout de valeur
					level = parseFloat(document.info.level.value)
					level_p = parseFloat(document.info.level_p.value)
					levelC = parseFloat(document.info.levelC.value)
					levelC_p = parseFloat(document.info.levelC_p.value)
					rank = parseFloat(document.info.rank.value)
					c1 = parseFloat(document.cartes.c1.value)
					c2 = parseFloat(document.cartes.c2.value)
					c3 = parseFloat(document.cartes.c3.value)
					c4 = parseFloat(document.cartes.c4.value)
					c5 = parseFloat(document.cartes.c5.value)
					c6 = parseFloat(document.cartes.c6.value)
					c7 = parseFloat(document.cartes.c7.value)
					c8 = parseFloat(document.cartes.c8.value)
					c9 = parseFloat(document.cartes.c9.value)
					c10 = parseFloat(document.cartes.c10.value)
					c11 = parseFloat(document.cartes.c11.value)
					c12 = parseFloat(document.cartes.c12.value)
					
					
					/****** Calcul ******/
					var t = "t"
					
					// Experience actuel
					var expActu = parseFloat(sessionStorage.getItem(level.toString())) * parseFloat(level_p/100);
					expActu = expActu.toFixed(2)
					
					// Experience total du début de niveau
					var expNivActu = parseFloat(sessionStorage.getItem(t.concat(level))) - parseFloat(sessionStorage.getItem(level))
					
					// Experience total actuel
					var expPrecis = parseFloat(expNivActu) + parseFloat(expActu)
					
					// Ajout des cartes d'exp
					var expCard = 0
					if(!isNaN(c1)) {
						expCard += c1*500
					}
					if(!isNaN(c2)) {
						expCard += c2*2686
					}
					if(!isNaN(c3)) {
						expCard += c3*8442
					}
					if(!isNaN(c4)) {
						expCard += c4*22860
					}
					if(!isNaN(c5)) {
						expCard += c5*24571
					}
					if(!isNaN(c6)) {
						expCard += c6*60312
					}
					if(!isNaN(c7)) {
						expCard += c7*142150
					}
					if(!isNaN(c8)) {
						expCard += c8*209334
					}
					if(!isNaN(c9)) {
						expCard += c9*237943
					}
					if(!isNaN(c10)) {
						expCard += c10*541023
					}
					if(!isNaN(c11)) {
						expCard += c11*985061
					}
					if(!isNaN(c12)) {
						expCard += c12*1344829
					}
					
					var exp = expPrecis + expCard
					
					// Cherche le niveau obtenu
					var j = 0
					for (var i = 1; i < 280; i++) {
						if(exp < sessionStorage.getItem(t.concat(i))) {
							j = i
							i = 280
						}
					}
					
					// Calcul de l'exp supplementaire
					var expPlus = exp - sessionStorage.getItem(t.concat(j-1))
					expPlus = parseInt(expPlus)
					
					// Dépasse le niveau 280
					if(expPlus < sessionStorage.getItem(279)) {
						// Calcul du pourcentage
						var pourcent = expPlus / sessionStorage.getItem(j)
						pourcent = pourcent *100
						pourcent = pourcent.toFixed(2)
						var maxExp = sessionStorage.getItem(j)
					} else {
						j = 280
						expPlus = sessionStorage.getItem(279)
						var pourcent = 100.00
						pourcent = pourcent.toFixed(2)
						var maxExp = expPlus
					}
					
					//Affiche le resultat
					if(sessionStorage.getItem("langue") == "english") {
						document.getElementById("resultatChara").innerHTML = "Start lvl : " + level +"\n<i class=\"material-icons tiny\">trending_flat</i>&nbsp;Obtained lvl : " + j + "\n<br/>Exp : " + expPlus + "/" + maxExp + "\nPercent : <i class=\"material-icons tiny\">trending_flat</i>&nbsp;" + pourcent +"&#37;";
					}
					else {
						document.getElementById("resultatChara").innerHTML = "Niveau d&#233;part : " + level +"\n<i class=\"material-icons tiny\">trending_flat</i>&nbsp;Niveau obtenu : " + j + "\n<br/>Exp Actu : " + expPlus + "/" + maxExp + "\nPourcent : <i class=\"material-icons tiny\">trending_flat</i>&nbsp;" + pourcent +"&#37;";
					}
					
				} else {
					if(sessionStorage.getItem("langue") == "english") {
						alert("Please, field the required form.")
					}
					else {
						alert("Veuillez remplir les champs requis.")
					}
				}
			}
			
			function calculateC() {
				if (document.getElementById('level').checkValidity() && document.getElementById('level_p').checkValidity()
				 && document.getElementById('levelC').checkValidity() && document.getElementById('levelC_p').checkValidity()
				 && document.getElementById('rank').checkValidity()) {
					
					// Ajout de valeur
					level = parseFloat(document.info.level.value)
					level_p = parseFloat(document.info.level_p.value)
					levelC = parseFloat(document.info.levelC.value)
					levelC_p = parseFloat(document.info.levelC_p.value)
					rank = parseFloat(document.info.rank.value)
					c1 = parseFloat(document.cartes.c1.value)
					c2 = parseFloat(document.cartes.c2.value)
					c3 = parseFloat(document.cartes.c3.value)
					c4 = parseFloat(document.cartes.c4.value)
					c5 = parseFloat(document.cartes.c5.value)
					c6 = parseFloat(document.cartes.c6.value)
					c7 = parseFloat(document.cartes.c7.value)
					c8 = parseFloat(document.cartes.c8.value)
					c9 = parseFloat(document.cartes.c9.value)
					c10 = parseFloat(document.cartes.c10.value)
					c11 = parseFloat(document.cartes.c11.value)
					c12 = parseFloat(document.cartes.c12.value)
					
					/* ***** Calcul ***** */
					
					var expActu = sessionStorage.getItem(rank + "_"+ levelC) * (levelC_p/100)
					expActu = expActu.toFixed()
					
					var expNivActu = sessionStorage.getItem("t" + rank + "_" + levelC) - sessionStorage.getItem(rank + "_"+ levelC)
					
					var expPrecis = parseFloat(expActu) + parseFloat(expNivActu)
					if(rank != 1) {
						expPrecis += parseFloat(sessionStorage.getItem("classeT" + parseInt(rank-1)))
					}
					
					// Ajout des cartes d'exp
					var expCard = 0
					if(!isNaN(c1)) {
						expCard += c1*385
					}
					if(!isNaN(c2)) {
						expCard += c2*2068
					}
					if(!isNaN(c3)) {
						expCard += c3*6500
					}
					if(!isNaN(c4)) {
						expCard += c4*17602
					}
					if(!isNaN(c5)) {
						expCard += c5*18919
					}
					if(!isNaN(c6)) {
						expCard += c6*46440
					}
					if(!isNaN(c7)) {
						expCard += c7*109455
					}
					if(!isNaN(c8)) {
						expCard += c8*161187
					}
					if(!isNaN(c9)) {
						expCard += c9*183216
					}
					if(!isNaN(c10)) {
						expCard += c10*416587
					}
					if(!isNaN(c11)) {
						expCard += c11*758496
					}
					if(!isNaN(c12)) {
						expCard += c12*1035518
					}
					
					var exp = expPrecis + expCard
					exp = exp.toFixed()
					
					var rankObtenu = 0
					for(var i = 1; i < 8; i++) {
						if(exp < parseInt(sessionStorage.getItem("classeT" + i))) {
							rankObtenu = i
							i = 8
						}
					}
					
					var expPlus = exp
					if(rankObtenu != 1) {
						expPlus -= sessionStorage.getItem("classeT" + parseInt(rankObtenu-1))
					}
					
					var lvlClasse = 0
					for(var k = 1; k < 15; k++) {
						if(expPlus < parseInt(sessionStorage.getItem("t" + rankObtenu + "_" + k))) {
							lvlClasse = k
							k = 15
						}
					}
					var expNivObtenu = sessionStorage.getItem("t" + rankObtenu + "_" + lvlClasse) - sessionStorage.getItem(rankObtenu + "_" + lvlClasse)
					expPlus -= expNivObtenu
					if(expPlus < sessionStorage.getItem("7_14")) {
						
						var pourcent = expPlus / sessionStorage.getItem(rankObtenu + "_" + lvlClasse)
						pourcent = pourcent *100
						pourcent = pourcent.toFixed(2)
						var maxExp = sessionStorage.getItem(rankObtenu + "_" + lvlClasse)
					} else {
						rankObtenu = 7
						lvlClasse = 15
						expPlus = sessionStorage.getItem("7_14")
						var pourcent = 100.00
						pourcent = pourcent.toFixed(2)
						var maxExp = expPlus
					}
					
					obj = document.getElementById("resultat");
					obj.style.display = "inline";
					
					if(sessionStorage.getItem("langue") == "english") {
						document.getElementById("resultatClass").innerHTML = "Class : " + levelC + " <i class=\"material-icons tiny\">trending_flat</i>&nbsp;Obtained class :&nbsp;" + lvlClasse 
																		+ "    <br/>Rank : " + rank + " <i class=\"material-icons tiny\">trending_flat</i>&nbsp;Obtained rank :&nbsp;" + rankObtenu 
																		+ "    <br/>Exp  : " + expPlus + " / " + maxExp 
																		+ "<i class=\"material-icons tiny\">trending_flat</i>&nbsp;Percent : " + pourcent +"&#37;"
					}
					else {
						document.getElementById("resultatClass").innerHTML = "Classe : " + levelC + "<i class=\"material-icons tiny\">trending_flat</i>&nbsp;Classe obtenue :&nbsp;" + lvlClasse 
																		+ "    <br/>Rank : " + rank + "<i class=\"material-icons tiny\">trending_flat</i>&nbsp;Rank obtenu :&nbsp;" + rankObtenu 
																		+ "    <br/>Exp Actu : " + expPlus + " / " + maxExp 
																		+ "<i class=\"material-icons tiny\">trending_flat</i>&nbsp;Pourcent : " + pourcent+"&#37;"
					}
				 }
			}