const chatBox = document.getElementById("chatBox");

const responses = {

    "hello":"👋 Hello! Welcome. How can I help you today?",

    "hi":"👋 Hi! Ask me anything about the internship.",

    "hey":"😊 Hello! How can I assist you?",

    "what is codealpha":"CodeAlpha is an organization that offers internship opportunities to help students improve their practical skills through real-world projects.",

    "what is this internship":"This internship helps students gain hands-on experience by completing practical projects.",

    "how do i apply":"Visit the official CodeAlpha website and fill out the internship application form.",

    "how to apply":"Visit the official website and submit the application form.",

    "is this internship free":"Yes, many CodeAlpha internships are free to join.",

    "is there a certificate":"✅ Yes! You can receive a certificate after successfully completing the required tasks.",

    "certificate":"Yes, certificates are provided after successful completion.",

    "internship duration":"The internship usually lasts about one month.",

    "duration":"The internship duration is generally one month.",

    "what projects should i submit":"Submit the projects assigned in your internship task list before the deadline.",

    "projects":"Complete and submit all the assigned projects.",

    "can beginners join":"✅ Yes! Beginners are welcome.",

    "skills required":"Basic knowledge of programming and willingness to learn are enough.",

    "frontend":"Frontend development uses HTML, CSS and JavaScript.",

    "html":"HTML is used to create the structure of a webpage.",

    "css":"CSS is used for styling webpages.",

    "javascript":"JavaScript makes webpages interactive.",

    "python":"Python is a beginner-friendly programming language.",

    "java":"Java is a popular object-oriented programming language.",

    "c":"C is a powerful programming language used for system programming.",

    "contact":"You can contact the support team through the official website.",

    "email":"Please check the official website for contact email.",

    "thanks":"😊 You're welcome!",

    "thank you":"😊 You're welcome! Happy coding!",

    "bye":"👋 Goodbye! Have a great day!",

    "goodbye":"👋 See you soon!",

    "who are you":"I'm an FAQ Chatbot created using HTML, CSS and JavaScript.",

    "what can you do":"I can answer common FAQ questions about internships and programming."
};

function sendMessage(){

    const input=document.getElementById("userInput");
    const text=input.value.trim();

    if(text===""){
        return;
    }

    // User Message
    const userDiv=document.createElement("div");
    userDiv.className="user-message";
    userDiv.innerText=text;
    chatBox.appendChild(userDiv);

    // Bot Reply
    const botDiv=document.createElement("div");
    botDiv.className="bot-message";

    const key=text.toLowerCase();

    if(responses[key]){
        botDiv.innerText=responses[key];
    }
    else{
        botDiv.innerText="🤖 Sorry, I don't have an answer for that question. Please try another FAQ.";
    }

    setTimeout(()=>{
        chatBox.appendChild(botDiv);
        chatBox.scrollTop=chatBox.scrollHeight;
    },500);

    input.value="";
}

function handleKey(event){

    if(event.key==="Enter"){
        sendMessage();
    }

}

function clearChat(){

    chatBox.innerHTML=`
    <div class="bot-message">
        👋 Hello! I'm your FAQ Bot.<br><br>
        Ask me anything about the internship.
    </div>
    `;

}