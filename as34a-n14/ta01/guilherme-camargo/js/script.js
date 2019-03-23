document.onreadystatechange = function(){
  if(document.readyState === 'complete'){
    const URL_API = "assets/data.json";

    const body = document.querySelector("#body");

    /* Get DOM objects for append text from JSON */
    const skillsDiv = document.querySelector(".skills");
    const worksList = document.querySelector(".experience");
    const educationList = document.querySelector(".education");

    async function fetchAPI(){
      let data = null;
      try{

        var options = { 
          method: 'GET',
          mode: 'no-cors',
        };

        const response = await fetch(URL_API, options);
        data = await response.json();
        return data;
      }catch(err){
        console.log(`Error on fetch API: ${err}`);
        body.innerHTML = '<div class="error"><h1>Por favor, para visualizar corretamente as informações utilize o Firefox</h1></div>';
        return err;
      }
    }
    /* Fetch API and append info on HTML */
    fetchAPI()
      .then((json) => {
        let works = json.work;
        let educations = json.education;
        let skills = json.skills;
        let profile

        /* Append Works/Professional Experiences section on HTML */
        for(let index=0; index < works.length; index++){
          let workData = works[index];       
          let newWork = `<li>
                          <h3 class="exp-company">${workData.company}</h3>
                          <div class="list-padding">
                              <span class="text-bold">Período: </span><span class="exp-period">${workData.startDate} até ${workData.endDate}</span>      
                          </div>
                          <div class="list-padding">
                              <span class="text-bold">Atribuições: </span><span class="exp-summary">${workData.summary.replace(/\+/g,'<br>')}</span>
                          </div>
                          <div class="list-padding">
                              <span class="text-bold">Cargo: </span><span class="exp-position">${workData.position}</span>
                          </div>
                      </li>`;
          worksList.innerHTML += newWork;            
      }
      /* Append Education section on HTML */
      for(let index=0; index < educations.length; index++) {
          let educationData = educations[index];
          let newEducation = `<li>
                          <h3>${educationData.institution}</h3>
                          <div class="list-padding">
                              <span class="text-bold">Período: </span><span>${educationData.startDate} até ${educationData.endDate}</span>      
                          </div>
                          <div class="list-padding">
                              <span class="text-bold">Curso: </span><span">${educationData.area}</span>
                          </div>
                      </li>`;
          educationList.innerHTML += newEducation;
      }
      
      /* Append Skills section on HTML */
      skills.forEach((skill, index) => {
          let newSkill = `<span class="skill">${skill}</span>`;
          skillsDiv.innerHTML += newSkill;
      });
  })
  .catch((err) => {
      console.log(`Error on get data: ${err}`);
      
  });
  }
}