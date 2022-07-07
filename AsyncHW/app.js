const filePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([
            "apple",
            "tomato",
            "carrot"
        ]);
    }, 5000);
});

const run = async () => {
    const array = await filePromise;
    array.forEach(elem => console.log(elem))
}

run();