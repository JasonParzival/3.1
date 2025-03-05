async function process() {
    let r = await fetch("/data.json");
    let data = await r.json();

    data.forEach(item => {
        if (item['Насколько материал курса был понятен?'] == "В основном") {
            console.log("Говорит что в основном понравился")
        }
    })
}

process()