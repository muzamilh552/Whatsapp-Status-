// Create Array of Object
let arr = [
  {
    dp: "https://images.unsplash.com/photo-1633405044931-d59ce835743f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1lbiUyMHBpY3R1cmVzfGVufDB8fDB8fHww",
    story:
      "https://media.istockphoto.com/id/2206927993/photo/artificial-intelligence-evolving-through-nature.webp?a=1&b=1&s=612x612&w=0&k=20&c=i_03Wcd-gCXSqBWuNgvr30OBqFffn7rxvO_t7dGR0-M=",
    Name: "Muzamil Hussain",
    Time: "yesterday",
    message:
      "Every tried ever failed, no matter try again fail again fail better.",
  },
  {
    dp: "https://images.unsplash.com/photo-1673972249409-2c27a19205b3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1lbiUyMHBpY3R1cmVzfGVufDB8fDB8fHww",
    story:
      "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    Name: "Rana Umer",
    Time: "5:06 AM",
    message: "Dont ask me about my success ,let me tell you about my failures",
  },
  {
    dp: "https://media.istockphoto.com/id/938524880/photo/the-perfect-backdrop-for-our-love.webp?a=1&b=1&s=612x612&w=0&k=20&c=MFLEcdu_H7G-JG12J7VY16xMxvmNT5MAs-01XDxdGg4=",
    story:
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww",
    Name: "Zain",
    Time: "3:15 PM",
    message: "No one but Talha can make Change",
  },
  {
    dp: "https://media.istockphoto.com/id/1300658241/photo/young-man-is-playing-with-a-dog-and-do-selfie.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZCJgOB4UjnImPj1jEzv0ZXyrTTEWANF43M3k25Mnq7I=",
    story:
      "https://images.unsplash.com/photo-1529419412599-7bb870e11810?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlfGVufDB8fDB8fHww",
    Name: "Ali Haider",
    Time: "11:43 PM",
    message: "Restart,Refocus but never give up",
  },
  {
    dp: "https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=DtB4a1dFa3A7aCqgvRB5NXEqH3ZI-KoNXtqduWv982g=",
    story:
      "https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlfGVufDB8fDB8fHww",
    Name: "Usman",
    Time: "6:55 AM",
    message: "You are far more stronger than your emotions",
  },
  {
    dp: "https://images.unsplash.com/photo-1598825597567-99b5f724cd8d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fG1lbiUyMHBpY3R1cmVzfGVufDB8fDB8fHww",
    story:
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww",
    Name: "Umair",
    Time: "10: 36 PM",
    message:
      "When you know , where you have to go, you have achieved half of the milestone",
  },
];

let clutter = "";
let storiyan = document.querySelector("#storiyan");
let h1 = document.querySelector("#h1");
// Using forEach function to fetch data from array
arr.forEach(function (elem, idx) {
  // clutter += ` <div class="showStory">
  //               <img id="${idx}" src="${elem.dp}" alt="">

  //           </div>  `;
  clutter += ` 
            <div class="statusItem">
                <div class="showStory">
                    <img id="${idx}" src="${elem.dp}"
                        alt="">
                </div>
                <div class="StatusInfo">
                    <h4>${elem.Name}</h4>
                    <h5>${elem.Time}</h5>
                </div>
            </div>
  `;
});

document.querySelector(".statusItem").innerHTML = clutter;

let story = document.querySelector(".statusItem");
//  when to click any status story addEventListener is run
story.addEventListener("click", function (dets) {
  document.querySelector("#full-screen").style.display = "block";
  document.querySelector("#full-screen").style.backgroundImage = `url(${
    arr[dets.target.id].story
  })`;
  h1.innerText = `${arr[dets.target.id].message}`;
  storiyan.style.display = "none";
  setTimeout(() => {
    document.querySelector("#full-screen").style.display = "none";
    storiyan.style.display = "block";
  }, 3000);
});
