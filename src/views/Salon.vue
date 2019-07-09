<template>
<div id="location">
    <form>
        <div class="flex-container">
        <div class="form-group">
            <button id="sacco-button">Sacco 1</button>
        </div>

        <div class="form-group">
            <button id="sacco-button">Sacco 2</button>
        </div>

        <div class="form-group">
            <button id="sacco-button">Sacco 3</button>
        </div>
    
          
        </div>
    </form>
    

</div>
</template>

<style scoped lang="css">
#location{
    background-color: #00008B;
    height:100vh;
}
.flex-container{
    display:flex;
    justify-content: center;
    align-items: center;
    padding-top:200px;
}
.flex-container > div {
  background-color: orange;
  margin: 10px;
  padding: 20px;
  font-size: 30px;
}

</style>