Simple site created from gatsby starter to display Ciera Hearn's Hairstyling/Barber portfolio. 

Originally was going to display images pulled from instagram but she had posted some Before/After images that were not cropped into one image, but two images on one instagram post, these displayed poorly if just pulling them from instagram. 

So decided it would be better as a curated collection of images as then no risk of a "Before" picture being amongst the "After"s.

GraphQL query to grab all images under a folder, display them side by side.
Simple header with instagram link.
Nothing else needed. Don't overcomplicate. 

If addition images are needed, they can be added to the folder, pushed to git, and netlify will build.

gatsby-transformer-sharp + gatsby-plugin-sharp used for images