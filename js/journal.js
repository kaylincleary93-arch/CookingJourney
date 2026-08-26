const journalForm = 
    document.querySelector(".journal-form");

const entryTitleInput= 
    document.querySelector("#entry-title");

const cookingDateInput =
    document.querySelector("#cooking-date");

const recipeNameInput =
    document.querySelector("#recipe-name");

const shortSummaryInput =
    document.querySelector("#short-summary");

const recipeRatingInput =
    document.querySelector("#recipe-rating");

const difficultyInput =
    document.querySelector("#difficulty");

const prepTimeInput =
    document.querySelector("#prep-time");

const cookTimeInput =
    document.querySelector("#cook-time");

const servingsInput =
    document.querySelector("#servings");

const wouldMakeAgainInput =
    document.querySelector("#would-make-again");

const wentWellInput =
    document.querySelector("#went-well");

const wasDifficultInput =
    document.querySelector("#was-difficult");

const lessonLearnedInput =
    document.querySelector("#lesson-learned");

const nextGoalInput =
    document.querySelector("#next-goal");

const changesThisTimeInput =
    document.querySelector("#changes-this-time");

const journalEntriesContainer = 
    document.querySelector(".journal-entries");

const journalSearchInput =
    document.querySelector("#journalsearch");

const difficultyFilter =
    document.querySelector("#difficulty-filter");

const journalSort =
    document.querySelector("#sort-journal");

const journalFormMessage =
    document.querySelector(
        "#journal-form-message"
    );
    
const urlParameters =
    new URLSearchParams(
        window.location.search
    );

const editingEntryId =
    urlParameters.get(
        "entryId"
    );
  
// APPlICATION STATE
let journalEntries = [];

let editingEntry = 
    null;

// LOAD SAVED STATE
const savedJournalEntries = 
    localStorage.getItem("journalEntries");

if(savedJournalEntries !== null){
    journalEntries = JSON.parse(savedJournalEntries);
}

if(editingEntryId !== null){
    editingEntry =
        journalEntries.find(
            function(journalEntry){

                return(journalEntry.id
                    ===
                    editingEntryId
                );
            }
        );

        entryTitleInput.value =
            editingEntry.title;
        
        cookingDateInput.value =
            editingEntry.cookingDate;

        recipeNameInput.value =
            editingEntry.recipeName;

        shortSummaryInput.value =
            editingEntry.summary;

        recipeRatingInput.value =
            editingEntry.session.rating;

        difficultyInput.value =
            editingEntry.session.difficulty;

        prepTimeInput.value =
            editingEntry.session.prepTime;

        cookTimeInput.value =
            editingEntry.session.cookTime;

        servingsInput.value =
            editingEntry.session.servings;

        wouldMakeAgainInput.value =
            editingEntry.session.wouldMakeAgain;
        
        wentWellInput.value = 
            editingEntry.reflection.wentWell;

        wasDifficultInput.value =
            editingEntry.reflection.wasDifficult;

        lessonLearnedInput.value =
            editingEntry.reflection.lessonLearned;

        nextGoalInput.value =
            editingEntry.reflection.nextGoal;

        changesThisTimeInput.value =
            editingEntry.reflection.changesThisTime;
    }
    
if(journalSearchInput !== null){

    journalSearchInput.addEventListener(
        "input",
        function(){

            applyJournalSearch();
        }
    );

    difficultyFilter.addEventListener(
        "change",
        function(){
            applyJournalSearch();
        }
    );

    journalSort.addEventListener(
        "change",
        function(){
            applyJournalSearch();
        }
    )

}

console.log(editingEntry);



// FUNCTIONS
function renderJournalEntries(entriesToRender){

            if(journalEntriesContainer === null){return;}

            journalEntriesContainer.innerHTML = "";

            for(
                let index = 0;
                index < entriesToRender.length;
                index = index + 1
            ){

                const currentEntry =
                    entriesToRender[index];
                
                const journalCard = 
                    document.createElement("article");

                journalCard.dataset.entryId =
                    currentEntry.id;

                const titleElement = 
                    document.createElement("h3");

                titleElement.textContent = 
                    currentEntry.title;

                const dateElement = 
                    document.createElement(
                        "p"
                    );

                const dateTitle =
                    document.createElement("strong");

                dateTitle.textContent=
                    "Cooking Date: ";
                    
                const dateTimeElement =
                    document.createElement("time");
                
                dateTimeElement.dateTime =
                    currentEntry.cookingDate;

                dateTimeElement.textContent =
                    currentEntry.cookingDate;

                dateElement.append(
                    dateTimeElement
                );

                const recipeElement =
                    document.createElement(
                        "p"
                    );

                const recipeTitle =
                    document.createElement("strong");

                recipeTitle.textContent =
                    "Recipe: ";
                   
                recipeElement.append(
                    recipeTitle,
                    currentEntry.recipeName
                );

                const summaryElement =
                    document.createElement(
                        "p"
                    );
                
                const summaryTitle =
                    document.createElement("strong");

                summaryTitle.textContent=
                    "Summary: ";

                summaryElement.append(
                    summaryTitle,
                    currentEntry.summary
                );  

                const ratingElement =
                    document.createElement(
                        "p"
                    );

                const ratingTitle =
                    document.createElement("strong");

                ratingTitle.textContent =
                    "Rating: ";
                
                ratingElement.append(
                    ratingTitle, 
                    currentEntry.session.rating, "/ 5"
                );

                const difficultyElement =
                    document.createElement(
                        "p"
                    );

                const difficultyTitle =
                    document.createElement("strong");

                difficultyTitle.textContent =
                    "Difficulty: ";

                difficultyElement.append (
                    difficultyTitle,
                    currentEntry.session.difficulty
                );

                const prepTimeElement =
                    document.createElement(
                        "p"
                    );

                const prepTimeTitle =
                    document.createElement("strong");

                prepTimeTitle.textContent =
                    "Prep Time: ";

                prepTimeElement.append(
                    prepTimeTitle,
                    currentEntry.session.prepTime
                );

                const cookTimeElement =
                    document.createElement(
                        "p"
                    );

                const cookTimeTitle =
                    document.createElement("strong");

                cookTimeTitle.textContent =
                    "Cook Time: ";

                cookTimeElement.append(
                    cookTimeTitle,
                    currentEntry.session.cookTime
                );   

                const servingsElement =
                    document.createElement(
                        "p"
                    );

                const servingsTitle =
                document.createElement("strong");

                servingsTitle.textContent =
                    "Servings: ";

                servingsElement.append(
                    servingsTitle,
                    currentEntry.session.servings
                );

                const wouldMakeAgainElement =
                    document.createElement(
                        "p"
                    );

                const wouldMakeAgainTitle =
                    document.createElement("strong");

                wouldMakeAgainTitle.textContent=
                    "Would Make Again? "

                wouldMakeAgainElement.append(
                    wouldMakeAgainTitle,
                    currentEntry.session.wouldMakeAgain
                );

                const wentWellElement =
                    document.createElement(
                        "p" 
                    );

                const wentWellTitle =
                    document.createElement("strong");

                wentWellTitle.textContent =
                    "Went Well: ";

                wentWellElement.append(
                    wentWellTitle,
                    currentEntry.reflection.wentWell
                );

                const wasDifficultElement =
                    document.createElement(
                        "p"
                    );

                const wasDifficultTitle =
                    document.createElement("strong");

                wasDifficultTitle.textContent =
                    "Was Difficult: ";

                wasDifficultElement.append(
                    wasDifficultTitle,
                    currentEntry.reflection.wasDifficult
                );
                
                const lessonLearnedElement =
                    document.createElement(
                        "p"
                    );

                const lessonLearnedTitle =
                    document.createElement("strong");

                lessonLearnedTitle.textContent=
                    "Lesson Learned: ";

                lessonLearnedElement.append(
                    lessonLearnedTitle,
                    currentEntry.reflection.lessonLearned
                );

                const nextGoalElement =
                    document.createElement(
                        "p"
                    );

                const nextGoalTitle =
                    document.createElement("strong");

                nextGoalTitle.textContent=
                    "Next Goal: ";

                const nextGoalEmphasis =
                    document.createElement("em");

                nextGoalEmphasis.textContent =
                    currentEntry.reflection.nextGoal;

                nextGoalElement.append(
                    nextGoalTitle,
                    nextGoalEmphasis
                );

                const changesThisTimeElement =
                    document.createElement(
                        "p"
                    );

                const changesThisTimeTitle =
                    document.createElement("strong");

                changesThisTimeTitle.textContent=
                    "Changes This Time: ";

                changesThisTimeElement.append(
                    changesThisTimeTitle,
                    currentEntry.reflection.changesThisTime
                );

                const deleteButton = 
                    document.createElement("button");
                
                deleteButton.textContent = 
                    "Delete";

                deleteButton.classList.add(
                    "journal-delete-button");

                const editButton =
                    document.createElement("button");

                editButton.textContent =
                    "Edit";

                editButton.classList.add(
                    "journal-edit-button"
                );

                journalCard.append(
                    titleElement, 
                    dateElement,
                    recipeElement
                ); 

                if(currentEntry.summary !== ""){
                    journalCard.append(summaryElement);}

                if(currentEntry.session.rating > 0){
                    journalCard.append(ratingElement);}

                if(currentEntry.session.difficulty !== ""){
                    journalCard.append(difficultyElement);}

                if(currentEntry.session.prepTime > 0){
                    journalCard.append(prepTimeElement);}

                if(currentEntry.session.cookTime > 0){
                    journalCard.append(cookTimeElement);}

                if(currentEntry.session.servings > 0){
                    journalCard.append(servingsElement);}

                if(currentEntry.session.wouldMakeAgain !==""){
                    journalCard.append(wouldMakeAgainElement);}

                //Reflection
                if(currentEntry.reflection.wentWell !== ""){
                    journalCard.append(wentWellElement);}

                if(currentEntry.reflection.wasDifficult !== ""){
                    journalCard.append(wasDifficultElement);}

                if(currentEntry.reflection.lessonLearned !== ""){
                    journalCard.append(lessonLearnedElement);}

                if(currentEntry.reflection.nextGoal !== ""){
                    journalCard.append(nextGoalElement);}

                if(currentEntry.reflection.changesThisTime !== ""){
                    journalCard.append(changesThisTimeElement);}

                journalCard.append(
                    deleteButton,
                    editButton
                );

                editButton.addEventListener(
                    "click",
                    function (){
                       window.location.href=
                       "add-journal-entry.html?entryId="
                       + currentEntry.id;
                    }
                );
                

                deleteButton.addEventListener(
                    "click",
                    function(){

                        const shouldDelete =
                            confirm(
                                "Delete this journal entry?"
                            );

                        if(!shouldDelete){
                            return;
                        }
                        
                        journalEntries =
                            journalEntries.filter(
                                function(journalEntry){
                                    return (
                                        journalEntry.id
                                        !== 
                                        currentEntry.id
                                    );
                                }
                            );
                            
                        localStorage.setItem(
                            "journalEntries",
                            JSON.stringify(
                                journalEntries
                            )
                        );

                        applyJournalSearch();
                    }
                );

                journalEntriesContainer.append(
                    journalCard);
                
                journalCard.classList.add("journal-card");
            }
        }

function applyJournalSearch(){

    const searchText =
        journalSearchInput.value.toLowerCase();

    const selectedDifficulty =
        difficultyFilter.value;

    const selectedSort =
        journalSort.value;

    const matchingEntries =
        journalEntries.filter(
            function(journalEntry){

                const matchesSearch =
                journalEntry.title.toLowerCase().includes(
                    searchText
                )
                ||
                journalEntry.recipeName.toLowerCase().includes(
                    searchText
                );

                const matchesDifficulty =
                    selectedDifficulty === "all"
                    ||
                    journalEntry.session.difficulty.toLowerCase()
                    === selectedDifficulty;

                return (
                    matchesSearch
                    &&
                    matchesDifficulty
                );
            }
        );

        if(
            selectedSort === "newest"
        ){
            matchingEntries.sort(
                function(
                    entryA,
                    entryB
                ){
                    return new Date(
                        entryB.cookingDate
                    )
                    -
                    new Date(
                        entryA.cookingDate
                    );
                }
            );
        }

        if(
            selectedSort === "oldest"
        ){
            matchingEntries.sort(
                function(
                    entryA,
                    entryB
                ){
                    return new Date(
                        entryA.cookingDate
                    )
                    -
                    new Date(
                        entryB.cookingDate
                    );
                }
            );
        }

        if(
            selectedSort === "highest-rating"
        ){
            matchingEntries.sort(
                function(
                    entryA,
                    entryB
                ){
                    return (
                        entryB.session.rating
                    -
                        entryA.session.rating
                    );
                }
            );
        }

        if(
            selectedSort === "lowest-rating"
        ){
            matchingEntries.sort(
                function(
                    entryA,
                    entryB
                ){
                    return (
                        entryA.session.rating
                    -
                        entryB.session.rating
                    );
                }
            );
        }

    renderJournalEntries(matchingEntries);

    console.log(matchingEntries);

}

// INITIAL READER
renderJournalEntries(journalEntries);


console.log(journalEntries);

if( journalForm !== null)
    { 
    journalForm.addEventListener(
        "submit",
        function (event) {
            event.preventDefault();

            const entryTitle =
                entryTitleInput.value;

            const cookingDate =
                    cookingDateInput.value;

            const recipeName =
                    recipeNameInput.value;

            const shortSummary =
                    shortSummaryInput.value;

            const recipeRating =
                Number(recipeRatingInput.value);

            const difficulty =
                    difficultyInput.value;
            
            const prepTime =
                    Number(prepTimeInput.value);

            const cookTime =
                    Number(cookTimeInput.value);

            const servings =
                    Number(servingsInput.value);

            const wouldMakeAgain =
                    wouldMakeAgainInput.value;

            const wentWell =
                    wentWellInput.value;

            const wasDifficult =
                    wasDifficultInput.value;

            const lessonLearned =
                    lessonLearnedInput.value;

            const nextGoal =
                    nextGoalInput.value;

            const changesThisTime =
                    changesThisTimeInput.value;

            if(editingEntry ===null){

                const journalEntry = {

                    id: crypto.randomUUID(),

                    title: entryTitle,
                    cookingDate: cookingDate,
                    recipeName: recipeName,
                    summary: shortSummary,

                    session: {
                        rating: recipeRating,
                        difficulty: difficulty,
                        prepTime: prepTime,
                        cookTime: cookTime,
                        servings:servings,
                        wouldMakeAgain: wouldMakeAgain
                    },

                    reflection:{
                        wentWell:wentWell,
                        wasDifficult: wasDifficult,
                        lessonLearned: lessonLearned,
                        nextGoal: nextGoal,
                        changesThisTime: changesThisTime
                    }    
            };

            journalEntries.push(journalEntry);

        }

        else{
            editingEntry.title =
            entryTitle;

            editingEntry.cookingDate =
            cookingDate;

            editingEntry.recipeName=
            recipeName;

            editingEntry.summary =
            shortSummary;

            editingEntry.session.rating =
            recipeRating;

            editingEntry.session.difficulty =
            difficulty;

            editingEntry.session.prepTime =
            prepTime;

            editingEntry.session.cookTime =
            cookTime;

            editingEntry.session.servings =
            servings;

            editingEntry.session.wouldMakeAgain =
            wouldMakeAgain;

            editingEntry.reflection.wentWell =
            wentWell;

            editingEntry.reflection.wasDifficult =
            wasDifficult;

            editingEntry.reflection.lessonLearned =
            lessonLearned;

            editingEntry.reflection.nextGoal =
            nextGoal;

            editingEntry.reflection.changesThisTime =
            changesThisTime;

            console.log(editingEntry);
        }

            localStorage.setItem(
                "journalEntries",
                JSON.stringify(journalEntries));

            if(editingEntry === null){
                journalFormMessage.textContent =
                "Entry added successfully"
            }

            else{
                journalFormMessage.textContent =
                "Edits Saved";
            }

            renderJournalEntries();

            
        }
    );
}