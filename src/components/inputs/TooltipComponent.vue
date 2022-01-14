<template>
  <span id="tooltiptext" class="tooltiptex">Usuario</span>
</template>

<script>
export default {
    name: 'TooltipComponent'
}
</script>

<style>
.tooltiptext{
    position: absolute;
    left: 50px;
    top:0;
    transform:  translatex(-50%);
    background-color: var(--primary);
    border-radius: 5px;
}
.tooltiptext::before{
    content: "";
    position: absolute;
    left: 50%;
    top: 100%;
    transform: translatex(-50%);
    border: 15px solid;
    border-color:#000 #000 #000 #000; 
}

.tooptip:hover .tooltiptext{
    top: -130%;
}
</style>