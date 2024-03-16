/*
  Створіть тип "Gender", використовуючи union type, 
  який може містити значення "male", "female". Створіть змінну myGender цього типу.
*/
type Gender = "male" | "female";
// const myGender: Gender; //? чому тут використано const, якщо змінна може переписуватися на "male" або "female"
let myGender: Gender;

export {};
