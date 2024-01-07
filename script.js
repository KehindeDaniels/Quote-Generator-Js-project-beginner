const quotes = [
    { quote: "The only way to do great work is to love what you do.", person: "Steve Jobs" },
    { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", person: "Winston Churchill" },
    { quote: "Life is 10% what happens to you and 90% how you react to it.", person: "Charles R. Swindoll" },
    { quote: "Believe you can and you're halfway there.", person: "Theodore Roosevelt" },
    { quote: "In the middle of difficulty lies opportunity.", person: "Albert Einstein" },
    { quote: "The best way to predict the future is to invent it.", person: "Alan Kay" },
    { quote: "Your time is limited, don't waste it living someone else's life.", person: "Steve Jobs" },
    { quote: "Strive not to be a success, but rather to be of value.", person: "Albert Einstein" },
    { quote: "The only limit to our realization of tomorrow will be our doubts of today.", person: "Franklin D. Roosevelt" },
    { quote: "I have not failed. I've just found 10,000 ways that won't work.", person: "Thomas Edison" },
    { quote: "The future belongs to those who believe in the beauty of their dreams.", person: "Eleanor Roosevelt" },
    { quote: "Stay hungry, stay foolish.", person: "Steve Jobs" },
    { quote: "The only source of knowledge is experience.", person: "Albert Einstein" },
    { quote: "You miss 100% of the shots you don't take.", person: "Wayne Gretzky" },
    { quote: "Don't watch the clock; do what it does. Keep going.", person: "Sam Levenson" },
    { quote: "Happiness is not something readymade. It comes from your own actions.", person: "Dalai Lama" },
    { quote: "If you want to lift yourself up, lift up someone else.", person: "Booker T. Washington" },
    { quote: "The mind is everything. What you think you become.", person: "Buddha" },
    { quote: "The best revenge is massive success.", person: "Frank Sinatra" },
    { quote: "Everything has beauty, but not everyone sees it.", person: "Confucius" }
    // Add more quotes and persons as needed
  ];
  

  const quote = document.querySelector('.quote');
  const person = document.querySelector('.person');
  const btn = document.querySelector('#btn');


  btn.addEventListener('click', ()=> {
      const random = Math.floor(Math.random() * quotes.length)

      quote.textContent = quotes[random].quote
      person.textContent = quotes[random].person

      console.log(random)
      
  })

