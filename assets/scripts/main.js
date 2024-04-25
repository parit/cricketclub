{
    let seasons = document.querySelector("#seasons");
    if (seasons) {
        seasons.addEventListener("change", e => {
            window.location.href = "/seasons/season-" + seasons.value;
        });
    }
}