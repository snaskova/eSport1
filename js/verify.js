(function(){
// UI
const container = document.getElementById("idWidget");
container.innerHTML = `
<style>

@font-face {
  font-family: 'Sport1 Bold';
  font-weight: 700;
  src:
    url('./fonts/regular/sport1-bold.woff') format('woff'),
    url('./fonts/regular/sport1-bold.ttf') format('truetype');
}

@font-face {
  font-family: 'Sport1 Light';
  font-weight: 700;
  src:
    url('./fonts/regular/sport1-light.woff') format('woff'),
    url('./fonts/regular/sport1-light.ttf') format('truetype');
}


    ::placeholder {
      opacity: 0.4;
    }

    .o-title{
      color:#f6a800;
    }

@media (max-width: 675px) {
  .guideline {
    display: none;
  }
}
</style>

  <div style=" color: #fff; font-family: Sport1 Bold; max-width: 1000px; padding: 1em; margin: 0 auto;">
  <h1 class="o-title">SICHERE DIR JETZT DEIN ESPORTS1 ABO!</h1>
<div class="title pt-2">SCHRITT 1: VERIFIZIERE DEIN ALTER ÜBER DEINEN PERSONALAUSWEIS</div>
<p class="subInfo">Um sicherstellen zu können, dass du berechtigt bist, die Inhalte von eSPORTS1 zu konsumieren, müssen wir vorab dein Alter feststellen. Aus diesem Grund bitten wir dich, im nächsten Schritt dein Alter über deinen Personalausweis zu verifizieren.</p>
<p class="subInfo">Deine Ausweisnummer wird einmalig zur Verifizierung verwendet und nicht von uns
gespeichert. Dadurch kann niemals Bezug zu deiner Person herstellt werden.</p>
    <div style="padding-top: 4px; font-size: 1.4em;">SO FUNKTIONIERT ES:</div>
    <div style="display: flex;">
      <div style="display: flex; width: 100%; padding-top: 2em; padding-bottom: 2em;">
        <div style="color: #f6a800; display: flex; justify-content: center; align-content: center; font-size: 1.6em; max-height: 30px; min-width: 30px; border: 3px solid #f6a800; border-radius: 100px; margin-right: 0.2em;">
          <div>1</div>
        </div>
        <div style="padding-top: 4px; font-size: 1.4em;">
          HIER FINDEST DU DEINE AUSWEISNUMMER
        </div>
      </div>
    </div>
    <div style="display: flex;">
      <div style="display: flex; flex-wrap: wrap; justify-content: space-around; width: 100%;">
        <div style="margin: 10px; max-width: 260px; min-width: 260px;" >
          <div><span>Neuer Personalausweis</span></div>
          <div><span style="font-family: Sport1 Light;">Ausgestellt ab November 2010</span></div>
          <div style="width: 100%; height: 170px; margin: 5px 0;">
            <img src="./img/verify/Perso_NEU_Rückseite_mitMarkierung.jpg" alt="Smiley face" height="100%" width="100%"></div>
            <div style="font-size: 0.6em; color: #282828">Bildquelle: Bundesdruckerei </div>
        </div>
        <div style="margin: 10px; max-width: 260px; min-width: 260px;">
          <div><span>Alter Personalausweis</span></div>
          <div><span style="font-family: Sport1 Light;">Ausgestellt bis Oktober 2010</span></div>
          <div style="width: 100%; height: 170px; margin: 5px 0;">
            <img src="./img/verify/Perso_alt_Vorderseite_mitMarkierung.jpg" alt="Smiley face" height="100%" width="100%"></div>
              <div style="font-size: 0.6em; color: #282828">Bildquelle: Bundesdruckerei </div>
        </div>
        <div style="margin: 10px; max-width: 260px; min-width: 260px;">
          <div><span>Reisepass</span></div>
          <div><span style="font-family: Sport1 Light;">Ausgestellt ab November 2001</span></div>
          <div style="width: 100%; height: 170px; margin: 5px 0;">
            <img src="./img/verify/Reisepass_2017 2.jpg" alt="Smiley face" height="100%" width="100%"></div>
                <div style="font-size: 0.6em; color: #282828">Bildquelle: Bundesdruckerei </div>
        </div>
      </div>
    </div>
    <div><span style="font-family: Sport1 Light; margin-left: 2%;">Wähle eine der drei Varianten aus.</span></div>
    <div>
      <div style="display: flex;">
        <div style="display: flex; width: 100%; padding-top: 2em; padding-bottom: 2em;">
          <div style="color: #f6a800; display: flex; justify-content: center; align-content: center; font-size: 1.6em; max-height: 30px; min-width: 30px; border: 3px solid #f6a800; border-radius: 100px; margin-right: 0.2em;">
            <div>2</div>
          </div>
          <div style="padding-top: 4px; font-size: 1.4em;">
            AUSWEISNUMMER EINGEBEN
          </div>
        </div>
      </div>
      <div class="form" style="display: flex; justify-content: center;">
        <form>
          <div>
            <input type="text" id="idNo" placeholder="T220001293" style="font-family: Sport1 Light; text-transform: uppercase; height: 2em; padding: 0.3em 0 0.3em 1em; margin: 0.5em 0.3em 0 0; font-size: 1em; border: none; background-image: none;"/>
            <input type="text" id="birthDateID" placeholder="6408125" style="font-family: Sport1 Light; text-transform: uppercase; height: 2em; padding: 0.3em 0 0.3em 1em; margin: 0.5em 0.3em 0 0; font-size: 1em; border: none; background-image: none;"/>
            <input type="text" id="idExpiration" placeholder="2010315D" style="font-family: Sport1 Light; text-transform: uppercase; height: 2em; padding: 0.3em 0 0.3em 1em; margin: 0.5em 0.3em 0 0; font-size: 1em; border: none; background-image: none;"/>
            <input type="text" id="checkSum" placeholder="4" style="font-family: Sport1 Light; text-transform: uppercase; height: 2em; padding: 0.3em 0 0.3em 1em; margin: 0.5em 0.3em 0 0; font-size: 1em; border: none; background-image: none; width: 2em;" />
          </div>
          <div class="guideline" style="position: relative; width: 100%; border: 0.5px solid #f6a800; margin-top: 35px; margin-bottom: 35px;">
            <div class="number" style="left: 10%; background-color: #f6a800; width: 30px; height: 30px; border-radius: 50px; position: absolute; bottom: -15px;"><div style="padding-top: 15%; display: flex; justify-content: center;">1</div></div>
            <div class="number" style="left: 42%; background-color: #f6a800; width: 30px; height: 30px; border-radius: 50px; position: absolute; bottom: -15px;"><div style="padding-top: 15%; display: flex; justify-content: center;">2</div></div>
            <div class="number" style="left: 72%; background-color: #f6a800; width: 30px; height: 30px; border-radius: 50px; position: absolute; bottom: -15px;"><div style="padding-top: 15%; display: flex; justify-content: center;">3</div></div>
            <div class="number" style="left: 92%; background-color: #f6a800; width: 30px; height: 30px; border-radius: 50px; position: absolute; bottom: -15px;"><div style="padding-top: 15%; display: flex; justify-content: center;">4</div></div>
          </div>
          <div style="margin-top: 35px; margin-bottom: 35px;">
            <a style="font-family: Sport1 Light; color: #fff;" target="_blank" rel="noopener" href="https://www.sport1.de/unternehmen/esportsapp">Datenschutz und
              Datenverarbeitung</a>
          </div>
          <div>
            <button id="submitBTN" class="button primaryBtn"  type="submit">WEITER</button>
          </div>
          <p id="log" style="font-family: Sport1 Bold; ont-size: 1.2em;"></p>
      </div>
      </form>
    </div>
  </div>`;

// Verify ID
document.getElementById("submitBTN").addEventListener("click", idTest);

function verifyID(id) {
  const requiredAge = 16;

  if (verifyAge(id) && verifyAge(id) < requiredAge) {
    return "ageError";
  }
  return (
    checkStringValid(id) &&
    checkLength(id) &&
    blockedIDs(id) &&
    isIDStillValid(id) &&
    checkSum(id.idNo) &&
    checkSum(id.birthDateID) &&
    checkSum(id.idExpiration) &&
    checkSum(Object.values(id).reduce((val, str) => val + str, ""))
  );
}

function formValues() {
  let idNo = document.getElementById(`idNo`).value;
  let idExpiration = document.getElementById(`idExpiration`).value;
  const birthDateID = document.getElementById(`birthDateID`).value;
  const checkSum = document.getElementById(`checkSum`).value;

  if (idExpiration.length > 7) {
    idExpiration = idExpiration.slice(0, 7);
  }
  if (idNo.length > 10) {
    idNo = idNo.slice(0, 10);
  }

  return {
    idNo,
    birthDateID,
    idExpiration,
    checkSum
  };
}

function idTest(e) {
  e.preventDefault();
  const logResult = document.getElementById("log");
  const verify = verifyID(formValues());
  if (verify === "ageError") {
    logResult.innerHTML =
      "Du bist nicht berechtigt das Angebot von eSPORTS1 zu nutzen.";
    return;
  } else if (verify) {
    // new Function(`(${container.getAttribute("onSuccess")})()`)();

    paywall.showPaywall({ asset: { assetId: 71615}, registerFirst: true });

    return;
  }
  logResult.innerHTML = "Deine Eingaben sind nicht korrekt. Bitte probiere es erneut.";
}

//1 - check if user input has only allowed characters and digits
function checkStringValid(id) {
  return Object.values(id).every(val => !/[^0-9A-Z]/.test(val));
}

//2 - check if the length of all the fields is correct
function checkLength(id) {
  return id.birthDateID.length === 7 &&
      id.idNo.length === 10 &&
      id.idExpiration.length === 7 &&
      id.checkSum.length === 1 &&
      Number.isInteger(parseInt(id.checkSum));
}

//3 - check if its not the data of one of the example ids shown
function blockedIDs(id) {
  const newID = {
    idNo: "T220001293",
    birthDateID: "6408125",
    idExpiration: "2010315",
    checkSum: "4"
  };

  const oldID = {
    idNo: "1220001297",
    birthDateID: "6408125",
    idExpiration: "1710319",
    checkSum: "8"
  };

  const pass = {
    idNo: "C01X00T478",
    birthDateID: "6408125",
    idExpiration: "2702283",
    checkSum: "4"
  };

  let checkNEW = Object.keys(id).every(key => id[`${key}`] === newID[`${key}`]);
  let checkOLD = Object.keys(id).every(key => id[`${key}`] === oldID[`${key}`]);
  let checkPass = Object.keys(id).every(key => id[`${key}`] === pass[`${key}`]);

  return !checkNEW && !checkOLD && !checkPass;
}

function verifyAge({ birthDateID }) {
  const dateString = formatDate(birthDateID);
  const birthday = +new Date(dateString);
  // 31557600000 -  the length of a year in milliseconds
  return ~~((Date.now() - birthday) / 31557600000);
}

function isIDStillValid({ idExpiration }) {
  const dateString = formatDate(idExpiration);
  const expiry = Date.parse(dateString);
  const today = Date.parse(new Date());
  return expiry > today;
}

function checkSum(number) {
  const idNumber = number.slice(0, -1);
  const checkNumber = number.slice(-1);

  let multiplier = 7;
  let sum = 0;

  const letters = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  const digits = Array.from("0123456789");

  Array.from(idNumber).map(char => {
    let int = 0;
    if (digits.includes(char)) {
      int = parseInt(char);
    } else if (letters.includes(char)) {
      let index = letters.indexOf(char);
      int = index + 10;
    }
    sum += int * multiplier;
    multiplier = modifyMultiplier(multiplier);
  });

  const lastNumber = sum % 10;
  return lastNumber === parseInt(checkNumber);
}

function modifyMultiplier(n) {
  switch (n) {
    case 1:
      return 7;
    case 3:
      return 1;
    case 7:
      return 3;
    default:
      return 0;
  }
}

function formatDate(date) {
  const idYear = date.slice(0, 2);
  const year = +idYear > 50 ? 19 + idYear : 20 + idYear;
  return `${year}/${date.slice(2, 4)}/${date.slice(4, 6)}`;
}
})();
