const calc = (e) => {
    let firstSign = document.getElementById('one').value.toUpperCase();
    let secondSign = document.getElementById('two').value.toUpperCase();

    if(firstSign == '') {
        alert('Please enter a sign')
    }
    else if (firstSign.length < 3){
        alert('Please enter a valid sign')
    }
    else if (!isNaN(firstSign)) {
        alert('Numbers are not allowed')
    }
    else if (secondSign == '') {
        alert('Please enter a sign')
    }
    else if (secondSign.length < 3){
        alert('Please enter a valid sign')
    }
    else if (!isNaN(secondSign)) {
        alert('Numbers are not allowed')
    }
    else {
      if(firstSign == 'ARIES' && secondSign == 'AQUARIUS') {
          document.getElementById('inner').innerHTML = 'There is never a dull moment between an Aries and Aquarius. You are on the right path . Ride On!'
    
      }
      else if(firstSign == 'TAURUS' && secondSign == 'CANCER') {
        document.getElementById('inner').innerHTML = 'Taurus and Cancer seriously get each other. You are  on the right path.Ride On!'
  
    }
    else if(firstSign == 'GEMINI' && secondSign == 'AQUARIUS') {
        document.getElementById('inner').innerHTML = 'A Gemini and Aquarius have a crazy mental and emotional connection. You are on the right path.Ride On!'
  
    }
    else if(firstSign == 'CANCER' && secondSign == 'PISCES') {
        document.getElementById('inner').innerHTML = 'The end result is a deep, mental connection that cannot be easily taken away. You are on the right path.Ride On!'
  
    }
    else if(firstSign == 'LEO' && secondSign == 'SAGITTARIUS') {
        document.getElementById('inner').innerHTML = 'The passion is high between Leo and Sagittarius, as both signs both enjoy life and love others who feel the same. You are on the right path.Ride On!'
  
    }
    else if(firstSign == 'VIRGO' && secondSign == 'TAURUS') {
        document.getElementById('inner').innerHTML = 'These two zodiac signs are also honest and sincere, which makes them incredible people to get close to, especially in a serious, long-term relationship. You are  on the right path.Ride On!'
  
    }
    else if(firstSign == 'LIBRA' && secondSign == 'GEMINI') {
        document.getElementById('inner').innerHTML = 'A relationship between a Libra and Gemini is all about a strong intellectual connection.  You are on the right path.Ride On!'
  
    }
    else if(firstSign == 'SCORPIO' && secondSign == 'CANCER') {
        document.getElementById('inner').innerHTML = 'These two water signs are intense when it comes to emotions, but that only seems to make them even more compatible.  You are on the right path.Ride On!'
  
    }
    else if(firstSign == 'SAGITTARIUS' && secondSign == 'ARIES') {
        document.getElementById('inner').innerHTML = 'Sagittarius and Aries are both fire signs, so you can expect some serious hot passion between the two, making for a dynamite pair.  You are on the right path.Ride On!'
  
    }
    else if(firstSign == 'CAPRICORN' && secondSign == 'TAURUS') {
        document.getElementById('inner').innerHTML = 'The bond between this pair is so powerful and magical. You are on the right path.Ride On!'
  
    }
    else if(firstSign == 'AQUARIUS' && secondSign == 'GEMINI') {
        document.getElementById('inner').innerHTML = 'Aquarius and Gemini are both air signs that have a killer psychological connection. You are on the right path.Ride On!'
  
    }
    else if(firstSign == 'PISCES' && secondSign == 'SCORPIO') {
        document.getElementById('inner').innerHTML = 'Sagittarius and Aries are both fire signs, so you can expect some serious hot passion between the two, making for a dynamite pair. You are on the right path.Ride On!'
  
    }
    else {
        document.getElementById('inner').innerHTML = 'Please Focus on Yourself. Zero Compatibility!'
    }
 


}
 
    
}

function refresh() {
    window.location.reload()
}
