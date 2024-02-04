<script>
    export let src;
    export let description;
    export let href;
    export let title;
    
    let scale = 1;
    
</script>

<a {href} target="_blank">
    <h2>{title}</h2>
    <img {src} alt={title} style="transform: scale({scale});" 
    on:mouseover={() => scale = 1.2} 
    on:mouseout={() => scale = 1}
    />
    <p>{description}</p>
</a>

<style>
    a {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        color: inherit;
    }

    img {
        width: 500px;
        height: 100px;
        object-fit: cover;
        margin-bottom: 10px;
        margin-top: 10px;
    }

    p {
        font-size: 16px;
        text-align: center;
    }
</style>
