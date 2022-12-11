import { v4 as uuidv4 } from "uuid"; 

const demoContent = {
    name: "Kobe Bryant",
    position: "Basketball Legend / Director",
    number: "1234567890",
    email: "kobe.bryant@mamba.com",
    location: "Los Angeles, CA",
    github: "https://www.youtube.com/watch?v=JHVMW3U5BZE",
    linkedin: "https://www.youtube.com/watch?v=JHVMW3U5BZE",
    bio: `Five NBA championships. 18x All-Star. 15x member of the All-NBA Team. 12x member of the All-Defensive Team. 2008 NBA Most Valuable Player (MVP). 2x NBA Finals MVP. Bryant led the NBA in scoring twice, and ranks fourth in league all-time regular season and postseason scoring. In 2020, Bryant was voted into the Naismith Memorial Basketball Hall of Fame (posthumously).
    He died in a tragic helicopter crash alongside his daughter Gianna in January 2020. He is survived by his wife, Vanessa, and his daughters Natalia, Bianka, and Capri.`,
    workstack: [
        {
            id: uuidv4(),
            title: "Shooting Guard",
            company: "Los Angeles Lakers",
            location: "Los Angeles, CA",
            start: "1996",
            finish: "2016",
            details: "Career Statistics: Points - 25.0ppg (33,643), Rebounds - 5.2rpg (7,047), Assists - 4.7apg (6,306).",
          },
          {
            id: uuidv4(),
            title: "Basketball Player",
            company: "USA National Team",
            location: "Olympics",
            start: "2008",
            finish: "2012",
            details: "2x Olympic gold medal winner. Bryant had a 26-0 record as a member of the national team.",
          },
          {
            id: uuidv4(),
            title: "Owner / Writer",
            company: "Granity Studios",
            location: "Newport Beach, CA",
            start: "2013",
            finish: "2020",
            details: "Bryant wrote and narrated 'Dear Basketball', an animated short film based on his retirement poem. It won the Academy Award for Best Animated Short Film in 2017. In doing so, he became the first African-American to win the category and the first former professional athlete to win an Academy Award in any category.",
          },
    ],
    unistack: [
        {
            id: uuidv4(),
            school: "Lower Merion High School",
            location: "Philadelphia, PA",
            degree: "",
            from: "1992",
            to: "1996",
            details: "In his senior year, Bryant garnered several awards, including: Naismith High School Player of the Year, Gatorade Men's National Basketball Player of the Year, McDonald's All-American, first-team Parade All-American, and USA Today All-USA First Team player. He went directly to the pros, becoming just the 6th player in NBA history to do so. He was drafted 13th overall in the 1996 NBA Draft by the Charlotte Hornets, then traded to the LA Lakers.",
          }
    ],
}

export default demoContent;