import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './about.css'



const About = () => {
  return (
    <div className='about'>
      <Card style={{ width: '70rem',margin: 'auto' }}>
      <Card.Body>
        <Card.Title>About</Card.Title>
        <Card.Subtitle className=" w-100"></Card.Subtitle>
        <Card.Text>
          <p>
          Embarking on a seamless and stress-free
          journey to find your ideal living space begins with our user-friendly rental house website. Navigating through the pages of our online platform, 
          you'll discover a curated collection of homes available for rent,
          each with its unique charm and character. Our website's intuitive design allows you to effortlessly filter your search based on your preferences,
          from the number of bedrooms to specific amenities. High-quality images and detailed descriptions accompany each listing, providing you
          with a virtual tour of your potential new home. Whether you're seeking a cozy apartment in the heart of the
          city or a spacious house nestled in a serene neighborhood, our website ensures that every detail is at your fingertips.
          With a secure and straightforward application process, supported by
          responsive customer service, your journey to finding the perfect rental home begins and ends with the convenience of our meticulously crafted 
          online platform. Welcome to a stress-free, digital gateway to your next home</p>
              
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    <Card style={{ width: '70rem', margin: 'auto'  }}>
      <Card.Body>
        <Card.Title>Goal</Card.Title>
        <Card.Subtitle className=" w-100 m-auto"></Card.Subtitle>
        <Card.Text className='m-auto'>
          <p>
          The primary goals of our rental house website revolve around providing an exceptional user experience and simplifying the often complex process of finding the perfect home. We aim to host a comprehensive and up-to-date database of rental listings, each accompanied by detailed property descriptions and high-quality visuals. Our website prioritizes user convenience through effective search and filtering options, allowing individuals to tailor their search based on specific criteria such as location, price range, and property type. Ensuring the reliability of information and offering secure transactions are key aspects of our platform, promoting transparency and trust within our community. We strive to create an engaging platform with community integration features, including neighborhood information, local amenities, and tenant reviews. By maintaining a responsive design and prompt customer support, we aim to foster positive interactions and provide valuable assistance to our users. Continual improvement is also crucial, guided by analytics tools that analyze user behavior and preferences to enhance the overall functionality and efficiency of our rental house website. Ultimately, our goals align with creating a user-centric, secure, and reliable online space where individuals can seamlessly navigate their journey towards finding their ideal rental property.
        </p>
              
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
</div>
  )
}

export default About