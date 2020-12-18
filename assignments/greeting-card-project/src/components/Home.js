import React from "react"

function Home(props) {
    const { catImg, dogImg } = props

    return (
        <main>
            <>
                <h1>Welcome to the Dog or Cat Postcard Maker</h1>
            </>
            <div className='description'>
                <p className='home-p'>Welcome to the postcard maker. There are two tabs, cad and dog. In both of these tabs you will be able to create a postcard the only difference between the two is if you would like the image of the postcard to be of a card or a dog. Once you have created the postcard you can save it. If you would like to create another one, just click Generate Postcard and a new image will appear.</p>
            </div>

            <div className='examples'>
                <section className='cat-example' style={{ backgroundImage: `url(${catImg})` }}></section>
                <section className='dog-example' style={{ backgroundImage: `url(${dogImg})` }}></section>
            </div>

        </main>
    )
}

export default Home