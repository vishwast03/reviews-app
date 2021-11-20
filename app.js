const imgContainer = document.querySelector('.img-container');
const personName = document.querySelector('.name');
const personJob = document.querySelector('.job');
const personReview = document.querySelector('.review');
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
const randomBtn = document.querySelector('.random-btn');

const reviews = [
    {
        id: 1,
        image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        name: "Susan Smith",
        job: "WEB DEVELOPER",
        review: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
    },
    {
        id: 2,
        image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        name: "Anna Johnson",
        job: "WEB DESIGNER",
        review: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
    },
    {
        id: 3,
        image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        name: "Peter Jones",
        job: "INTERN",
        review: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
    },
    {
        id: 4,
        image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        name: "Bill Anderson",
        job: "THE BOSS",
        review: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
    }
]

window.addEventListener('load', () => {
    let idx = 0;
    showReview(idx);

    prevBtn.addEventListener('click', () => {
        idx--;
        if(idx < 0)
            idx = reviews.length - 1;
        showReview(idx);
    });

    nextBtn.addEventListener('click', () => {
        idx++;
        if(idx > reviews.length - 1)
            idx = 0;
        showReview(idx);
    });

    randomBtn.addEventListener('click', () => {
        idx = getRndInteger(0, reviews.length);
        showReview(idx);
    });
});

function showReview(idx) {
    const currentReview = reviews[idx];
    imgContainer.innerHTML = `<img src="${currentReview.image}" alt="Person Image" id="person-image">`
    personName.textContent = currentReview.name;
    personJob.textContent = currentReview.job;
    personReview.textContent= currentReview.review;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}