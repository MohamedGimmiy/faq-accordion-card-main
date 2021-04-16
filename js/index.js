let questions = document.querySelectorAll('.quest');
let ans = document.querySelectorAll('.ans');
let arrows = document.querySelectorAll('.arr');
let qa = document.querySelectorAll('.qa');

arrows.forEach(a=>{
    a.classList.remove('arr');
});

console.log(questions)
console.log(ans)

qa.forEach((qA, index)=>{
    qA.addEventListener('click',()=>{
        removeQuest();
        questions[index].classList.add("bolding");
        ans[index].classList.remove("ans");
        arrows[index].classList.add('arr');
    });

})

function removeQuest(){
    questions.forEach(q=>{
        q.classList.remove('bolding');
    });
    ans.forEach(a=>{
        a.classList.add("ans");
    });
    arrows.forEach(arr=>{
        arr.classList.remove('arr');
    })
}