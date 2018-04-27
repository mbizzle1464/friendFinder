// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
    {
        name: "Ross Geller",
        photo:
            "https://vignette.wikia.nocookie.net/friends/images/8/89/Square_Ross.jpg/revision/20111216200027",
        scores: ["5", "1", "4", "4", "5", "1", "2", "5", "4", "1"]
    },
    {
        name: "Rachel Green",
        photo:
            "https://www.aquarelle.md/uploads/news/66535/95743_import_image.png",
        scores: ["4", "2", "5", "1", "3", "2", "2", "1", "3", "2"]
    },
    {
        name: "Phoebe Buffay",
        photo: "https://upload.wikimedia.org/wikipedia/lv/f/f6/Friendsphoebe.jpg",
        scores: ["5", "2", "2", "2", "4", "1", "3", "2", "5", "5"]
    },
    {
        name: "Chandler Bing",
        photo:
            "https://pbs.twimg.com/profile_images/917789882776522752/7nZeyOPc_400x400.jpg",
        scores: ["3", "3", "4", "2", "2", "1", "3", "2", "2", "3"]
    },
    {
        name: "Joey Tribbiani",
        photo:
            "http://f-r-i-e-n-d-s.allmyblog.com/images/f-r-i-e-n-d-s/1_20080114_191638.jpg",
        scores: ["4", "3", "4", "1", "5", "2", "5", "3", "1", "4"]
    },
    {
        name: "Monica Geller",
        photo:
            "http://images.fanpop.com/images/image_uploads/Monica-monica-geller-86967_278_358.jpg",
        scores: ["4", "4", "2", "3", "2", "2", "3", "2", "4", "5"]
    },
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
