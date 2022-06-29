javascript: (() => {
  //get all links
  const hrefs = Array.from(document.getElementsByTagName("a"));
  const contactInfo = {
    phones: [],
    emails: [],
  };

  //take only links that are emails or phones and push to main object
  hrefs.forEach((a) => {
    if (a.href.substring(0, 7) === "mailto:") {
      contactInfo.emails.push(a.href.substring(7, a.href.length).trim());
    }
    if (a.href.substring(0, 4) === "tel:") {
      contactInfo.phones.push(a.href.substring(4, a.href.length).trim());
    }
  });

  //create textarea
  const body = document.getElementsByTagName("body")[0];
  body.innerHTML += `
    
    <textarea id="veljkoIlicIsGreat" cols="30" rows="20" ></textarea>
    `;
  //textarea styles
  const styles = `
    z-index: 1000000;
    position:fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%)
    `;
  const textarea = document.getElementById("veljkoIlicIsGreat");

  textarea.CSSText = "";
  textarea.style = styles;

  if (contactInfo.emails.length == 0 && contactInfo.phones.length == 0) {
    alert("Nothing found. Redirecting to contact page in a few seconds...");
    setTimeout(() => {
      const getUrl = window.location;
      const baseUrl =  getUrl.protocol + "//" + getUrl.host + "/";
      window.location = baseUrl + "contact"
    }, 3000);
  }
  //Fill the textarea with info
  textarea.innerHTML += "Phones:\n---------\n";
  contactInfo.phones.forEach((e) => {
    textarea.innerHTML += e + "\n";
  });

  textarea.innerHTML += "\nE-mails:\n---------\n";
  contactInfo.emails.forEach((e) => {
    textarea.innerHTML += e + "\n";
  });
})();
