var scriptData={name:"Barbs Finder",version:"v1.3.4",author:"RedAlert",authorUrl:"https://twscripts.ga/",helpLink:"https://forum.tribalwars.net/index.php?threads/barb-finder-with-filtering.285289/"};"boolean"!=typeof DEBUG&&(DEBUG=!1);var VILLAGE_TIME="mapVillageTime",VILLAGES_LIST="mapVillagesList",TIME_INTERVAL=3600000,villages=[],barbarians=[],translations={en_DK:{"Barbs Finder":"Barbs Finder","Min Points:":"Min Points:","Max Points:":"Max Points:","Radius:":"Radius:","Barbs found:":"Barbs found:","Coordinates:":"Coordinates:",'Error while fetching "village.txt"!':"Error while fetching \"village.txt\"!",Coords:"Coords",Points:"Points","Dist.":"Dist.",Attack:"Attack",Filter:"Filter",Reset:"Reset","No barbarian villages found!":"No barbarian villages found!","Current Village:":"Current Village:","Sequential Scout Script:":"Sequential Scout Script:",Help:"Help"},en_US:{"Barbs Finder":"Barbs Finder","Min Points:":"Min Points:","Max Points:":"Max Points:","Radius:":"Radius:","Barbs found:":"Barbs found:","Coordinates:":"Coordinates:",'Error while fetching "village.txt"!':"Error while fetching \"village.txt\"!",Coords:"Coords",Points:"Points","Dist.":"Dist.",Attack:"Attack",Filter:"Filter",Reset:"Reset","No barbarian villages found!":"No barbarian villages found!","Current Village:":"Current Village:","Sequential Scout Script:":"Sequential Scout Script:",Help:"Help"},sk_SK:{"Barbs Finder":"H\xC4\xBEada\xC4\x8D barbariek","Min Points:":"Min bodov:","Max Points:":"Max bodov:","Radius:":"Vzdialenos\xC5\xA5:","Barbs found:":"N\xC3\xA1jden\xC3\xA9 barbarky:","Coordinates:":"S\xC3\xBAradnice:",'Error while fetching "village.txt"!':"Chyba pri na\xC4\x8D\xC3\xADtan\xC3\xAD \"village.txt\"!",Coords:"S\xC3\xBAradnice",Points:"Body","Dist.":"Vzdial.",Attack:"\xC3\u0161tok",Filter:"Filter",Reset:"Reset","No barbarian villages found!":"Neboli n\xC3\xA1jden\xC3\xA9 \xC5\xBEiadne dediny barbarov!","Current Village:":"S\xC3\xBA\xC4\x8Dasn\xC3\xA1 dedina:","Sequential Scout Script:":"Sequential Scout Script:",Help:"Pomoc"},fr_FR:{"Barbs Finder":"Recherche de Barbares","Min Points:":"Points Min.:","Max Points:":"Points Max.:","Radius:":"Radius:","Barbs found:":"Barbs found:","Coordinates:":"Coordinates:",'Error while fetching "village.txt"!':"Error while fetching \"village.txt\"!",Coords:"Coords",Points:"Points","Dist.":"Dist.",Attack:"Attaquer",Filter:"Filtrer",Reset:"R\xC3\xA9initialiser","No barbarian villages found!":"No barbarian villages found!","Current Village:":"Village Actuel:","Sequential Scout Script:":"Sequential Scout Script:",Help:"Help"},pt_PT:{"Barbs Finder":"Procurador de B\xC3\xA1rbaras","Min Points:":"Pontos m\xC3\xADnimos:","Max Points:":"Pontos m\xC3\xA1ximos:","Radius:":"Raio:","Barbs found:":"B\xC3\xA1rbaras encontradas:","Coordinates:":"Coordenadas:",'Error while fetching "village.txt"!':"Erro ao procurar \"village.txt\"!",Coords:"Coords",Points:"Pontos","Dist.":"Dist.",Attack:"Attack",Filter:"Filtro",Reset:"Reset","No barbarian villages found!":"N\xC3\xA3o foram encontradas b\xC3\xA1rbaras!","Current Village:":"Aldeia Atual:","Sequential Scout Script:":"Sequential Scout Script:",Help:"Ajuda"}};if(initDebug(),initTranslationsNotice(),null!=localStorage.getItem(TIME_INTERVAL)){var mapVillageTime=parseInt(localStorage.getItem(VILLAGE_TIME));if(Date.parse(new Date)>=mapVillageTime+TIME_INTERVAL)fetchVillagesData();else{var data=localStorage.getItem(VILLAGES_LIST);villages=CSVToArray(data),init()}}else fetchVillagesData();function fetchVillagesData(){$.get("map/village.txt",function(a){villages=CSVToArray(a),localStorage.setItem(VILLAGE_TIME,Date.parse(new Date)),localStorage.setItem(VILLAGES_LIST,a)}).done(function(){init()}).fail(function(a){console.error(`${scriptInfo()} Error:`,a),UI.ErrorMessage(`${tt("Error while fetching \"village.txt\"!")}`,4e3)})}function init(){findBarbarianVillages();var a=`
		<div class="ra-mb15">
			<strong>${tt("Current Village:")}</strong>
			<a href="/game.php?screen=info_village&id=${game_data.village.id}" target="_blank" rel="noopener noreferrer">
				${game_data.village.name}
			</a>
		</div>
		<div class="ra-flex ra-mb10">
			<div class="ra-flex-4">
				<label for="minPoints" class="ra-fw600"">${tt("Min Points:")}</label>
				<input type="text" id="minPoints" class="ra-form-control" value="26">
			</div>
			<div class="ra-flex-4">
				<label for="maxPoints" class="ra-fw600"">${tt("Max Points:")}</label>
				<input type="text" id="maxPoints" class="ra-form-control" value="12154">
			</div>
			<div class="ra-flex-4">
				<label for="radius" class="ra-fw600">${tt("Radius:")}</label>
				<select id="radius_choser" class="ra-form-control">
					<option value="10">10</option>
					<option value="20">20</option>
					<option value="30">30</option>
					<option value="40">40</option>
					<option value="50" selected>50</option>
					<option value="60">60</option>
					<option value="70">70</option>
					<option value="80">80</option>
					<option value="90">90</option>
					<option value="100">100</option>
					<option value="110">110</option>
					<option value="120">120</option>
					<option value="130">130</option>
					<option value="140">140</option>
					<option value="150">150</option>
				</select>
			</div>
		</div>
		<a href="javascript:void(0);" onClick="filterBarbs();" class="btn btn-confirm-yes">
			${tt("Filter")}
		</a>
		<a href="javascript:void(0);" onClick="resetFilters();" class="btn btn-confirm-no">
			${tt("Reset")}
		</a>
		<p class="ra-fs12">
			<strong>${tt("Barbs found:")}</strong>
			<span id="barbsCount">0</span>
		</p>
		<div class="ra-mb10">
			<label class="ra-fw600" for="barbCoordsList">${tt("Coordinates:")}</label>
			<textarea id="barbCoordsList" class="ra-textarea" readonly></textarea>
        </div>
        <div class="ra-mb10">
			<label class="ra-fw600" for="barbScoutScript">${tt("Sequential Scout Script:")}</label>
			<textarea id="barbScoutScript" class="ra-textarea" readonly></textarea>
		</div>
		<div id="barbariansTable" style="display:none;max-height:240px;overflow-y:auto;margin-bottom:8px;"></div>
		<div id="noBarbariansFound" style="display:none;">
			<p><strong>${tt("No barbarian villages found!")}</strong>
		</div>
	`;const b=preparePopupContent(a);Dialog.show("content",b)}function findBarbarianVillages(){villages.forEach(a=>{"0"==a[4]&&barbarians.push(a)}),DEBUG&&console.debug(`${scriptInfo()} Barbarian Villages:`,barbarians)}function filterBarbs(){var a=parseInt($("#minPoints").val().trim()),b=parseInt($("#maxPoints").val().trim()),c=parseInt($("#radius_choser").val());DEBUG&&(console.debug(`${scriptInfo()} Minimum Points:`,a),console.debug(`${scriptInfo()} Maximum Points:`,b));const d=barbarians.filter(c=>c[5]>=a&&c[5]<=b),e=d.filter(a=>{var b=calcDistanceFromCurrentVillage(a);if(b<=c)return a});updateUI(e)}function resetFilters(){$("#minPoints").val(26),$("#maxPoints").val(12154),$("#radius_choser").val("20"),$("#barbsCount").text("0"),$("#barbCoordsList").text(""),$("#barbScoutScript").val(""),$("#barbariansTable").hide(),$("#barbariansTable").html("")}function updateUI(a){if(0<a.length){var b=getVillageCoord(a),c=b.length,d=b.join(" "),e=generateScoutScript(d),f=generateBarbariansTable(a);$("#barbsCount").text(c),$("#barbCoordsList").text(d),$("#barbScoutScript").val(e),$("#barbariansTable").show(),$("#barbariansTable").html(f)}else resetFilters(),$("#noBarbariansFound").fadeIn(200),setTimeout(function(){$("#noBarbariansFound").fadeOut(200)},4e3)}function generateBarbariansTable(a){if(!(1>a.length)){var b=[];a.forEach(a=>{var c=calcDistanceFromCurrentVillage(a);b.push([...a,c])}),b.sort((c,a)=>c[7]-a[7]);var c=generateTableRows(b),d=`
		<table class="vis overview_table ra-table" width="100%">
			<thead>
				<tr>
					<th>
						#
					</th>
					<th>
						K
					</th>
					<th>
						${tt("Coords")}
					</th>
					<th>
						${tt("Points")}
					</td>
					<th>
						${tt("Dist.")}
					</th>
					<th>
						${tt("Attack")}
					</th>
				</tr>
			</thead>
			<tbody>
				${c}
			</tbody>
		</table>
	`;return d}}function generateTableRows(a){var b="";return a.forEach((a,c)=>{c++;var d=a[3].charAt(0)+a[2].charAt(0);b+=`
			<tr>
				<td class="ra-tac">
					${c}
				</td>
				<td class="ra-tac">
					${d}
				</td>
				<td class="ra-tac">
					<a href="game.php?screen=info_village&id=${a[0]}" target="_blank" rel="noopener noreferrer">
						${a[2]}|${a[3]}
					</a>
				</td>
				<td>${formatAsNumber(a[5])}</td>
				<td class="ra-tac">${a[7]}</td>
				<td class="ra-tac">
					<a href="/game.php?screen=place&target=${a[0]}" target="_blank" rel="noopener noreferrer" class="btn">
						${tt("Attack")}
					</a>
				</td>
			</tr>
		`}),b}function generateScoutScript(a){return`javascript:coords='${a}';var doc=document;if(window.frames.length>0 && window.main!=null)doc=window.main.document;url=doc.URL;if(url.indexOf('screen=place')==-1)alert('Use the script in the rally point page!');coords=coords.split(' ');index=0;farmcookie=document.cookie.match('(^|;) ?farm=([^;]*)(;|$)');if(farmcookie!=null)index=parseInt(farmcookie[2]);if(index>=coords.length)alert('All villages were extracted, now start from the first!');if(index>=coords.length)index=0;coords=coords[index];coords=coords.split('|');index=index+1;cookie_date=new Date(2021,3,27);document.cookie ='farm='+index+';expires='+cookie_date.toGMTString();doc.forms[0].x.value=coords[0];doc.forms[0].y.value=coords[1];$('#place_target').find('input').val(coords[0]+'|'+coords[1]);doc.forms[0].spy.value=1;`}function calcDistanceFromCurrentVillage(a){var b=game_data.village.x,c=game_data.village.y,d=a[2],e=a[3],f=Math.round(Math.hypot(b-d,c-e));return f}function getVillageCoord(a){var b=[];return a.forEach(a=>{b.push(a[2]+"|"+a[3])}),b}function formatAsNumber(a){return parseInt(a).toLocaleString("de")}function CSVToArray(a,b){b=b||",";for(var c=new RegExp("(\\"+b+"|\\r?\\n|\\r|^)(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|([^\"\\"+b+"\\r\\n]*))","gi"),d=[[]],e=null;e=c.exec(a);){var f=e[1];f.length&&f!==b&&d.push([]);var g;g=e[2]?e[2].replace(/""/g,"\""):e[3],d[d.length-1].push(g)}return d}function scriptInfo(){return`[${scriptData.name} ${scriptData.version}]`}function preparePopupContent(a,b="340px",c="360px"){const d=`
		<h3 class="ra-fs18 ra-fw600">
			${tt(scriptData.name)}
		</h3>
		<div class="ra-body">`,e=`</div><small><strong>${tt(scriptData.name)} ${scriptData.version}</strong> - <a href="${scriptData.authorUrl}" target="_blank" rel="noreferrer noopener">${scriptData.author}</a> - <a href="${scriptData.helpLink}" target="_blank" rel="noreferrer noopener">${tt("Help")}</a></small>`;return`
		${d}
		${a}
		${e}
		${`
		<style>
			.popup_box_content { overflow-y: hidden; }
			.ra-body { width: 100%; min-width: ${b}; max-width: ${c}; box-sizing: border-box; }
			.ra-fs12 { font-size: 12px; }
			.ra-fs16 { font-size: 16px; }
			.ra-fs18 { font-size: 18px; }
			.ra-fw600 { font-weight: 600; }
			.ra-mb10 { margin-bottom: 10px; }
			.ra-mb15 { margin-bottom: 15px; }
			.ra-tac { text-align: center; }
			.ra-textarea { width: 100%; height: 80px; box-sizing: border-box; padding: 5px; resize: none; }
			.ra-textarea:focus { box-shadow: none; outline: none; border: 1px solid #000; background-color: #eee; }
			.ra-table { border-spacing: 2px; border-collapse: separate; margin-bottom: 5px; border: 2px solid #f0e2be; }
			.ra-table th { text-align: center; }
            .ra-table td { padding: 1px 2px; }
            .ra-table td a { word-break: break-all; }
			.ra-table tr:nth-of-type(2n) td { background-color: #f0e2be }
			.ra-table tr:nth-of-type(2n+1) td { background-color: #fff5da; }
			.ra-form-control { font-size: 12px; padding: 4px; width: 100%; box-sizing: border-box; }
			.ra-flex { display: flex; flex-flow: row wrap; justify-content: space-between; }
			.ra-flex-6 { flex: 0 0 48%; }
			.ra-flex-4 { flex: 0 0 30.5%; }
		</style>
	`}
	`}function initDebug(){console.debug(`${scriptInfo()} It works ðŸš€!`),console.debug(`${scriptInfo()} HELP:`,scriptData.helpLink),DEBUG&&(console.debug(`${scriptInfo()} Market:`,game_data.market),console.debug(`${scriptInfo()} World:`,game_data.world),console.debug(`${scriptInfo()} Screen:`,game_data.screen),console.debug(`${scriptInfo()} Game Version:`,game_data.majorVersion),console.debug(`${scriptInfo()} Game Build:`,game_data.version),console.debug(`${scriptInfo()} Locale:`,game_data.locale),console.debug(`${scriptInfo()} Premium:`,game_data.features.Premium.active))}function tt(a){const b=game_data.locale;return void 0===translations[b]?translations.en_DK[a]:translations[b][a]}function initTranslationsNotice(){const a=game_data.locale;translations[a]===void 0&&UI.ErrorMessage(`No translation found for <b>${a}</b>. <a href="${scriptData.helpLink}" class="btn" target="_blank" rel="noreferrer noopener">Add Yours</a> by replying to the thread.`,4e3)}
