const HOBBY = "Playing video games";

function Question(hobby){
    let bop=``
    let q1= ``
    let q2= ``
    let num =''
    const rand = [5, 5, 2, 3, 3, 4, 4, 4]
    const cat= [
        "movie", "video game", 
        "book", "song"
    ]
    const hob = [
        "Watching movies", "Playing video games", 
        "Sports", "Playing Musical instruments", "Reading books", 
        "Singing", "Dancing", "Acting"
    ]
    let gen = [
        "Who introduced you to your hobby?",
        "Who is the one you idolized related to your hobby?",
        "What is your all-time favorite movie related to your hobby?",
        "Which person would you most like to collaborate related to your hobby?",
        "What is the most valuable piece of equipment or tool you own related to your hobby?"
    ]
    hobby === (`Football`, `Basketball`, `Soocer`, `Baseball`, `Tennis`, `Football`) ? hobby=`Sports` : null
    let i= ''
    hob.map((el, index)=>{
        if(hobby === el){
            i=index
            bop = cat[i]
            num = rand[i]+5
        }
    })
    let randomNum = parseInt(Math.random() * num)
    
    const spec = [
        `What is the name of your favorite in a ${bop}?`, //<reading, video game, watching movie>
        `what is the your favorite genre in a ${bop}?`, //<reading, video game, singing, dancing, watching movie>
        `What is the first equipment you played with?`, //<musical instrument, video game>
        `What is your favorite sports team?`, //<sports>
        `What was the first movie you ever watched in a cinema?`, //<movie> <acting>
        `Which actor or actress is your all-time favorite?`, // <movie> <acting>
        `What was the first ${bop} you ever played with?`, //<video game> <musical instrument> <singing> <dancing> <acting>
        `Who is the fictional character do you relate to the most?`, //<reading, game, movie>
        `Who is your favorite athlete?`, //<sports>
        `What's your favorite song to perform?`, //<musical instrument, singing, dancing>
    ]
    
    switch (i) {
        case 0:
            gen.push(spec[0])
            gen.push(spec[1])
            gen.push(spec[4])
            gen.push(spec[5])
            gen.push(spec[7])
            break;
        case 1:
            gen.push(spec[0])
            gen.push(spec[1])
            gen.push(spec[2])
            gen.push(spec[6])
            gen.push(spec[7])
            break;
        case 2:
            gen.push(spec[3])
            gen.push(spec[8])
            break;
        case 3:
            gen.push(spec[9])
            gen.push(spec[6])
            gen.push(spec[2])
            break;
        case 4:
            gen.push(spec[0])
            gen.push(spec[1])
            gen.push(spec[7])
            break;
        case 5:
            gen.push(spec[1])
            gen.push(spec[6])
            gen.push(spec[9])
            break;
        case 6:
            gen.push(spec[1])
            gen.push(spec[6])
            gen.push(spec[9])
            break;
        case 7:
            gen.push(spec[4])
            gen.push(spec[5])
            gen.push(spec[6])
            break;
    }    
    q1=gen[randomNum]
    gen.splice(randomNum, 1)
    randomNum = parseInt(Math.random() * num)
    q2=gen[randomNum]
    console.log(gen)
    console.log(q1, "\n", q2)
}
Question(HOBBY)