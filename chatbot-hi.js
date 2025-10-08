// import { jarallax } from 'jarallax';
// gsap.registerPlugin(ScrollTrigger, SplitText, jarallax);



$(function () {


  "use strict";



  const messageInput = document.querySelector(".message-input");
  const messages = document.querySelector(".messages-content");

  let i = 0;
  const fakeMessages = [
    "नमस्ते! वेदांता बालको में आपका स्वागत है। मैं हूँ बालको बड्डी,आपका सहायक। मैं आपकी कैसे मदद कर सकता हूँ? क्या, आप इनमें से किसी विषय में जानना चाहेंगे?",
  ];

  document.querySelector(".message-submit").addEventListener("click", insertMessage);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      insertMessage();
      e.preventDefault();
    }
  });

  function insertMessage() {
    const msg = messageInput.value.trim();
    if (!msg) return;

    addMessage(msg, "chat-message-personal");
    messageInput.value = "";
    scrollMessages();
    setTimeout(fakeMessage, 1000);
  }

  function addMessage(text, className = "") {
    const message = document.createElement("div");
    message.className = `chat-message ${className}`;
    message.innerHTML = text;
    messages.appendChild(message);
  }

  function fakeMessage() {
    if (i >= fakeMessages.length) return;

    addMessage(fakeMessages[i]);

    if (i === 0) {
      addButtons();
    }

    i++;
    scrollMessages();
  }

  function addButtons() {
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "button-container";

    const buttonLabels = [
      "हम कौन हैं",
      "हम क्या करते हैं",
      "हमारी यात्रा",
      "सीएसआर पहल",
      "बालको में जीवन",
      "हमारे उत्पाद",
      "करियर",
      "युवाओं को सशक्त बनाना",
      "बालको समाचार में",
      "संपर्क करें",
    ];

    buttonLabels.forEach(label => {
      const button = document.createElement("button");
      button.className = "chat-button";
      button.textContent = label;
      button.addEventListener("click", () => {

        addMessage(`${label}`, "chat-message-personal");

        addMessage(getButtonContent(label), "chat-message-bot");

        scrollMessages();
        setTimeout(fakeMessage, 1000);
      });
      buttonContainer.appendChild(button);
    });

    messages.appendChild(buttonContainer);
  }

  function getButtonContent(label) {
    switch (label) {
      // ------------------------Who are we---------------------------
      case "हम कौन हैं":
        return `भारत एल्यूमिनियम कंपनी लिमिटेड (बालको), जिसकी स्थापना 1965 में भारत के पहले सार्वजनिक क्षेत्र उपक्रम के रूप में हुई थी। आज वेदांता समूह की एक प्रमुख इकाई है। कोरबा, छत्तीसगढ़ में स्थित बालको, उच्च गुणवत्ता वाले मूल्य-वर्धित एल्यूमिनियम उत्पादों का अग्रणी निर्माता है, जो देश की आधारभूत संरचना और प्रमुख उद्योगों में अहम भूमिका निभाता है। 
      <br><br><span class="cht-heading">नेतृत्व –</span><br>हमारे लीडर से मिलिए, जो हमारे कॉर्पोरेट प्रशासन और मूल्य सृजन को रणनीतिक रूप से दिशा देते हैं।

      <div class="mt-2 fw-600">
      	श्री अनिल अग्रवाल <span class="chat-deg">(चेयरमैन, वेदांता लिमिटेड)</span> <br>	श्री राजेश कुमार <span class="chat-deg">(सीईओ एवं निदेशक, बालको)</span>
      </div>
       <div class="chat-rply-btn">
       <a class="hyper-color" href="${baseUrl}/hi/बालको-को-जानिए/बाल्को-नेतृत्व/">निदेशक मंडल</a>
       <a class="hyper-color" href="${baseUrl}/hi/बालको-को-जानिए/बाल्को-नेतृत्व/">बोर्ड समितियाँ</a>
        <a class="hyper-color" href="${baseUrl}">होम</a>
       </div>`;
     
      // ------------------------What do we do---------------------------
      case "हम क्या करते हैं":
        return `हम 1965 से भारत के प्रतिष्ठित एल्यूमिनियम निर्माता हैं, और बीआईएस प्रमाणित उच्च गुणवत्ता वाले उत्पाद प्रदान करते हैं।

     <div class="chat-rply-btn">
      <a class="hyper-color" href="${baseUrl}/hi/हमारा-कार्य/हमारे-उत्पाद/">हमारे उत्पाद</a><br> 
      <a class="hyper-color" href="${baseUrl}">होम</a>
      </div>
      `;

      // -----------------------Our journey---------------------------
      case "हमारी यात्रा":
        return `1965 में पंडित जवाहरलाल नेहरू द्वारा रखे गए आधारशिला के साथ स्थापित बालको ने भारतीय एल्यूमिनियम उद्योग को आकार देने में एक महत्वपूर्ण भूमिका निभाई है। 
       
       <div class="chat-rply-btn">
       <a class="hyper-color" href="${baseUrl}/hi/बालको-को-जानिए/कम्पनी-परिचय/">महत्वपूर्ण उपलब्धियाँ</a>
       <a class="hyper-color" href="${baseUrl}">होम</a></div>
       `;

      // -----------------------CSR Initiatives---------------------------
      case "सीएसआर पहल":
        return `वेदांता बालको में हम जीवन को सशक्त बनाने और समुदायों को बदलने में विश्वास रखते हैं!
        <div class="chat-rply-btn">
          <a class="hyper-color" href="${baseUrl}/hi/सामाजिक-प्रभाव/सीएसआर-कार्यक्रम/सतत-आजीविका/">मोर जल मोर माटी</a>
          <a class="hyper-color" href="${baseUrl}/hi/सामाजिक-प्रभाव/सीएसआर-कार्यक्रम/स्वास्थ्य-जल-और-स्वच्छता/">प्रोजेक्ट आरोग्य</a>
          <a class="hyper-color" href="https://www.balcomedicalcentre.com/" target="_blank">BALCO मेडिकल सेंटर</a>
          <a class="hyper-color" href="${baseUrl}/hi/शिक्षा/">प्रोजेक्ट कनेक्ट</a>
          <a class="hyper-color" href="${baseUrl}/hi/शिक्षा/">नंद घर</a>
          <a class="hyper-color" href="${baseUrl}/hi/सामाजिक-प्रभाव/सीएसआर-कार्यक्रम/सतत-आजीविका/">वेदांता स्किल स्कूल</a>
          <a class="hyper-color" href="${baseUrl}/hi/सामाजिक-प्रभाव/सीएसआर-कार्यक्रम/स्वास्थ्य-जल-और-स्वच्छता/">मोबाइल हेल्थ वैन</a>
          <a class="hyper-color" href="${baseUrl}/hi/सामाजिक-प्रभाव/सीएसआर-कार्यक्रम/स्वास्थ्य-जल-और-स्वच्छता/">नई किरण</a>
          <a class="hyper-color" href="${baseUrl}">होम</a>
        </div> `;

        // ------------------------Life at BALCO--------------------------- 
        case "बालको में जीवन":
          return ` बालको टाउनशिप में स्कूल, अस्पताल, बैंक, शॉपिंग सेंटर और पारिवारिक व सामुदायिक क्लब जैसी सभी सुविधाएं उपलब्ध हैं। 
       
          <div class="chat-rply-btn">
          <a class="hyper-color" href="${baseUrl}/hi/टाउनशिप-सुविधाएँ/">BALCO क्लब</a>
          <a class="hyper-color" href="${baseUrl}/hi/टाउनशिप-सुविधाएँ/">डाइनिंग रूम</a>
          <a class="hyper-color" href="${baseUrl}/hi/टाउनशिप-सुविधाएँ/">GET हॉस्टल</a>
          <a class="hyper-color" href="${baseUrl}/hi/टाउनशिप-सुविधाएँ/">मितान भवन</a>
          <a class="hyper-color" href="${baseUrl}/hi/टाउनशिप-सुविधाएँ/">जिम</a>
          <a class="hyper-color" href="${baseUrl}/hi/टाउनशिप-सुविधाएँ/">एक्सपर्ट क्लब</a>
          <a class="hyper-color" href="${baseUrl}/hi/टाउनशिप-सुविधाएँ/">BALCO स्टेडियम</a>
          <a class="hyper-color" href="${baseUrl}">होम</a>
          </div>`;

      // ------------------------Our products---------------------------वायर रॉड्स, इंगट्स, रोल्ड प्रोडक्ट्स, प्राइमरी फाउंड्री एलॉय, होम – हाइपरलिंक    
      case "हमारे उत्पाद":
        return ` बालको के उत्पादों में वायर रॉड्स, इंगट्स, रोल्ड प्रोडक्ट्स और प्राइमरी फाउंड्री एलॉय शामिल हैं।
      
      <div class="chat-rply-btn">
        <a class="hyper-color" href="${baseUrl}/hi/हमारा-कार्य/हमारे-उत्पाद/वॉयर-रॉड/">वायर रॉड्स</a>
        <a class="hyper-color" href="${baseUrl}/hi/हमारा-कार्य/हमारे-उत्पाद/इंगट्स/">इंगट्स</a>
        <a class="hyper-color" href="${baseUrl}/hi/हमारा-कार्य/हमारे-उत्पाद/रोल्ड-प्रोडक्ट्स/">रोल्ड प्रोडक्ट्स</a>
        <a class="hyper-color" href="${baseUrl}/hi/हमारा-कार्य/हमारे-उत्पाद/प्राईमरी-फाउंड्री-एलॉय/">प्राइमरी फाउंड्री एलॉय</a>
        <a class="hyper-color" href="${baseUrl}">होम</a>
      </div>`;

        // ------------------------Empowering the Youth---------------------------
        case "युवाओं को सशक्त बनाना":
          return `हम युवाओं को संभावनाओं से भरे भविष्य के लिए तैयार करते हैं! 
       
        <div class="chat-rply-btn">
        <a class="hyper-color" href="${baseUrl}/hi/लोग/">हमसे जुड़ें</a>
        <a class="hyper-color" href="${baseUrl}">होम</a>
        </div>`;


      // ------------------------Careers---------------------------
      case "करियर":
        return `हम अपने कर्मचारियों को एक विविध और समावेशी वातावरण प्रदान कर उन्हें सशक्त बनाते हैं, जहाँ हर कोई आगे बढ़ता है। 
     
      <div class="chat-rply-btn">
      <a class="hyper-color" href="${baseUrl}/hi/लोग/">बालको में जीवन</a>
        <a class="hyper-color" href="${baseUrl}/hi/लोग/">युवाओं को सशक्त बनाना</a>
        <a class="hyper-color" href="${baseUrl}/hi/लोग/">हमारे साथ जुड़ें</a>
        <a class="hyper-color" href="${baseUrl}">होम</a> 
      </div>`;

      // ------------------------BALCO in news---------------------------
      case "बालको समाचार में":
        return `हमारे नवीनतम मीडिया रिपोर्ट्स, प्रेस विज्ञप्तियाँ और प्रमुख प्रकाशनों में बालको से जुड़ी खबरें देखें। 
      
      <div class="chat-rply-btn">
      <a class="hyper-color" href="${baseUrl}/hi/बालको-की-खबर/प्रेस-विज्ञप्ति/">बालको समाचारों में</a>
      <a class="hyper-color" href="${baseUrl}">होम</a>
      </div>`;

      // ------------------------Contact us---------------------------
      case "संपर्क करें":
        return `हमसे संपर्क करें –

      <div class="chat-rply-btn">
      <a class="hyper-color" href="${baseUrl}/hi/संपर्क-करें/">संपर्क करें</a>
      <a class="hyper-color" href="${baseUrl}">होम</a>
      </div>`;

      default:
        return "कृपया मेनू से एक विकल्प चुनें।";
    }
  }

  function scrollMessages() {
    messages.scrollTop = messages.scrollHeight;
  }

  setTimeout(fakeMessage, 1000);

  document.getElementById('myTextArea').addEventListener('input', function () {
    this.style.fontWeight = '300';
  });

});