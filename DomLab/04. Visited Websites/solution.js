function solve() {
    let websites = document.querySelectorAll('.link-1 a');


    for (const website of websites) {
        website.addEventListener('click', onLinkElementClick);
    }

    function onLinkElementClick (e) {
        let paragraph = e.currentTarget.nextElementSibling;
        let array = paragraph.innerHTML.split(' ');
        let count = Number(array[1]) + Number(1);

        paragraph.innerHTML = `visited ${count} times`;
    }
}