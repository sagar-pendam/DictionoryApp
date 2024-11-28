let s = document.getElementById("submit")
const x = () => {
  let d = document.getElementById("demo").hidden = false
  let n = document.getElementById('todo').value;
  console.log(n)
  const WordApi = async () => {
    let p = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + n)
    let response = await p.json()
    return response

  }
  const y = async () => {
    let a = await WordApi()
    console.log(a)


    for (let i = 0; i < 3; i++) {
      let cardT = document.getElementsByClassName('card-header')[i].innerHTML = "<h1>Meaning</h1>"
      let c = document.getElementsByClassName('card-title')
      c[i].innerHTML = `<h1>${n}</h1> definition`
    }

    try {
      let b = a[0].meanings[0].definitions
      let d = document.getElementsByClassName('card-text')
      d[0].innerHTML = ""
      let arr = []
      for (let i = 0; i < b.length; i++) {
        // console.log(b[i].definition)
        arr.push(`<p>${b[i].definition}</p>`)
      }
      d[0].innerHTML = arr

    }
    catch (err) {
      let s = document.getElementsByClassName('card-text')
      s[0].innerHTML = "<p>No Info</p>"
    }

    try {
      let dd1 = document.getElementsByClassName('card-text')[1]

      let b1 = a[0].meanings[1].definitions
      dd1.innerHTML = ""
      let arr1 = []
      for (let i = 0; i < b1.length; i++) {
        // console.log(b[i].definition)
        arr1.push(`<p>${b1[i].definition}</p>`)
      }
      dd1.innerHTML = arr1
    }
    catch (err) {
      let cd1 = document.getElementsByClassName('card-text')[1]
      cd1.innerHTML = "<p>No Info</p>"
    }


    try {
      let dd3 = document.getElementsByClassName('card-text')[2]
      let b5 = a[0].meanings[2].definitions
      dd3.innerHTML = ""
      let arr2 = []
      for (let i = 0; i < b5.length; i++) {
        arr2.push(`<p>${b5[i].definition}</p>`)
      }
      dd3.innerHTML = arr2
    }
    catch (err) {
      let cd3 = document.getElementsByClassName('card-text')[2]
      cd3.innerHTML = "<p>No Info</p>"
      console.log(err)

    }


    try {
      for (let i = 0; i < 3; i++) {
        let e = document.getElementsByClassName('card-footer')
        e[i].innerHTML = `<b>PartOfSpeech :${a[0].meanings[i].partOfSpeech}</b>`
      }
    }
    catch (err) {
      console.log(err)
      for (let i = 0; i < 3; i++) {
        let e = document.getElementsByClassName('card-footer')
        e[i].innerHTML = ""
      }

    }


    try {
      for (let i = 0; i < 3; i++) {
        if (a[0].meanings[i].antonyms.length != 0) {
          let f = document.getElementsByClassName('anto')
          f[i].innerHTML = `<b>antonyms:</b> ${a[0].meanings[i].antonyms}`

        }
        else {
          let f = document.getElementsByClassName('anto')
          f[i].innerHTML = `<b>antonyms:</b> No antonyms`
        }
      }
    }
    catch (err) {
      console.log(err)
      for (let i = 0; i < 3; i++) {

        let f = document.getElementsByClassName('anto')
        f[i].innerHTML = `<b>antonyms: No antonyms </b>`



      }
    }


  try{
    for(let i=0;i<3;i++){

      if(a[0].meanings[i].synonyms.length != 0){
        let f = document.getElementsByClassName('syno')
        f[i].innerHTML = `<b>synonyms:</b> ${a[0].meanings[i].synonyms}`

          }
          else{
            let f = document.getElementsByClassName('syno')
            f[i].innerHTML = `<b>synonyms:</b> No synonyms`
          }
    }
    
  }
catch(err)
  {
    console.log(err)
    for(let i=0;i<3;i++){

      
        let f = document.getElementsByClassName('syno')
        f[i].innerHTML = `<b>synonyms:</b> No synonyms`

          
          
    }
  }


    //   d[1].innerHTML = arr1
    //   console.log(d[0])

    //  


    
  }
  y()
}
s.addEventListener('click', x)




