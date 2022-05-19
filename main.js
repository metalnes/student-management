var list_of_students=[]
function submit(){
for(i=1; i<=4; i++){
     name_of_student=document.getElementById("name_of_the_student_"+i).value;
    console.log(name_of_student)
     list_of_students.push(name_of_student)
      }
      var length=list_of_students.length
      var displayhtml=""
      for(k=0; k<length; k++){
          displayhtml=displayhtml+"<br>"+list_of_students[k]
      }
      document.getElementById("display_name_with_commas").innerHTML=displayhtml
      document.getElementById("sort_button").style.display="block"
      
}
function sorting(){
    list_of_students.sort()
    console.log(list_of_students)
    document.getElementById("display_name_without_commas").innerHTML=list_of_students
    

}
