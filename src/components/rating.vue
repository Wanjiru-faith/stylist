<template>
<div>
    <div class="stars" data-rating="3">Rating:
        <span class="star">&nbsp;</span>
        <span class="star">&nbsp;</span>
        <span class="star">&nbsp;</span>
        <span class="star">&nbsp;</span>
        <span class="star">&nbsp;</span>
    </div>
</div>

</template>
<style scoped>
.star{
    color:black;
    font-size:20px;
    padding: 0 2px; /* spacing stars */
}
.star::before{
    content:'\2606';
    cursor: pointer;
}
.star.rated::before{
    /* style for selected star-filled star */
    content:'\2605';
}
.stars{
    background:transparent;
    font-size:15px;
    
}


</style>