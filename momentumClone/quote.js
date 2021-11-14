const quotes = [
    {
        quote:"1꿈을 이루고자 하는 용기만 있다면 모든 꿈을 이룰 수 있다",
        author:"월트 디즈니",
    },
    {
        quote:"2꿈을 이루고자 하는 용기만 있다면 모든 꿈을 이룰 수 있다",
        author:"월트 디즈니",
    },
    {
        quote:"3꿈을 이루고자 하는 용기만 있다면 모든 꿈을 이룰 수 있다",
        author:"월트 디즈니",
    },
    {
        quote:"4꿈을 이루고자 하는 용기만 있다면 모든 꿈을 이룰 수 있다",
        author:"월트 디즈니",
    },
    {
        quote:"5꿈을 이루고자 하는 용기만 있다면 모든 꿈을 이룰 수 있다",
        author:"월트 디즈니",
    },
    {
        quote:"6꿈을 이루고자 하는 용기만 있다면 모든 꿈을 이룰 수 있다",
        author:"월트 디즈니",
    },
    {
        quote:"7꿈을 이루고자 하는 용기만 있다면 모든 꿈을 이룰 수 있다",
        author:"월트 디즈니",
    },
    {
        quote:"8꿈을 이루고자 하는 용기만 있다면 모든 꿈을 이룰 수 있다",
        author:"월트 디즈니",
    },
    {
        quote:"9꿈을 이루고자 하는 용기만 있다면 모든 꿈을 이룰 수 있다",
        author:"월트 디즈니",
    },
    {
        quote:"10꿈을 이루고자 하는 용기만 있다면 모든 꿈을 이룰 수 있다",
        author:"월트 디즈니",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random()*quotes.length)]

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;