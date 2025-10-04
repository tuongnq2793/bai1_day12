const student = {
    name: "Nguyen Van A",
    age: 20,
    gender: "male",
    scores: {
        math: 8,
        english: 7,
        science: 9
    }
};

console.log("ho va ten:", student.name);
console.log("tuoi:", student.age);

const avgScore = (student.scores.math + student.scores.english + student.scores.science) / 3;
console.log("DTB la:",avgScore);

student.address = "Ha Noi";
console.log("sau khi them address:", { ...student });

delete student.gender;
console.log("sau khi xoa gender:", { ...student });