// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
    {
        name: "Lara Croft",
        photo:
            "https://www.dropbox.com/s/gyn6wi7ppmcg99f/Tomb%20Riader.jpg?dl=0",
        scores: ["5", "1", "4", "4", "5", "1", "2", "5", "4", "1"]
    },
    {
        name: "Peter Rabbit",
        photo:
            "https://www.dropbox.com/s/rzqgfgvozuohapl/peter%20rabbit.jpg?dl=0",
        scores: ["4", "2", "5", "1", "3", "2", "2", "1", "3", "2"]
    },
    {
        name: "Han Solo",
        photo: "https://www.dropbox.com/s/e6qmc90exva596z/Solo%20A%20Star%20Wars%20Story.jpg?dl=0",
        scores: ["5", "2", "2", "2", "4", "1", "3", "2", "5", "5"]
    },
    {
        name: "Melissa McCarthy",
        photo:
            "https://www.dropbox.com/s/y83li6zqiy6zniy/Life%20of%20the%20Party.jpg?dl=0",
        scores: ["3", "3", "4", "2", "2", "1", "3", "2", "2", "3"]
    },
    {
        name: "Amy Schumer",
        photo:
            "https://www.dropbox.com/s/n61hfvepngfm0ny/I%20Feel%20Pretty.jpg?dl=0",
        scores: ["4", "3", "4", "1", "5", "2", "5", "3", "1", "4"]
    },
    {
        name: "Deadpool",
        photo:
            "https://www.dropbox.com/s/rihdwbs2pl85rm5/Deadpool%202.jpg?dl=0",
        scores: ["4", "4", "2", "3", "2", "2", "3", "2", "4", "5"]
    },
    {
        name: "Black Panther",
        photo: "https://www.dropbox.com/s/ob4hfgo6ggrprn4/black%20panther.jpg?dl=0",
        scores: ["3", "3", "3", "3", "3", "3", "3", "3", "3", "3"]
    }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
