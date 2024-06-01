export default function Home() {
  return (
    <>
      <section className="flexbox">
          <aside className="left">
              <h1>COOKIE WEEK!</h1>
              <p>Craving something sweet?</p>
              <p>Try our double or triple chocolate chip cookies.</p>
          </aside>
          <aside className="right">
              <img src="images/double_cookies.jpg" alt="2cookies" />
              <img src="images/triple_cookies.jpg" alt="3cookies" />
          </aside>
      </section>
      <section id="about_us">
          <aside className="left_about">
              <img src="images/nas_dvi.jpg" alt="logo" />
          </aside>
          <aside className="right_about">
              <h1>ABOUT US</h1>
              <p>
                  Gina and Karla, the dynamic duo of university friends, discovered a shared love for baking that would ultimately lead them to create an enticing baking website. United by their passion for all things sweet, the pair envisioned a platform that would be a haven for baking enthusiasts worldwide. Thus, "Sweet Odyssey" was born, a digital space which offers a vibrant collection of recipes, baking tips, and personal anecdotes.
              </p>
              <p>
                  Together, they curated a diverse array of recipes, from classic treats to innovative creations, and shared their baking adventures through engaging blog posts. Sweet Odyssey has become not just a reflection of their friendship but also a source of inspiration for a growing community of baking enthusiasts, drawn to the warmth and authenticity Gina and Karla infused into their delectable corner of the internet.
              </p>
          </aside>
      </section>
      <section id="highlights">
          <h1>HIGHLIGHTED RECIPES</h1>
          <aside className="highlighted">
              <img src="images/highlight1.jpg" alt="First highlighted recipe" />
              <div className="recipe">
                  <h1>Banana chocolate muffins</h1>
                  <p>2 to 3 ripe bananas<br />
                      1/2 cup butter<br />
                      3/4 cup granulated sugar<br />
                      1 large egg<br />
                      1 teaspoon vanilla extract<br />
                      1 1/2 cups all-purpose flour<br />
                      1 teaspoon baking soda<br />
                      1/4 teaspoon salt<br />
                      1/2 cup unsweetened cocoa powder<br />
                      1 cup chocolate chips
                  </p>
              </div>
          </aside>
          <aside className="highlighted">
              <img src="images/highlight2.jpg" alt="Second highlighted recipe" />
              <div className="recipe">
                  <h1>Tiramisu</h1>
                  <p>6 egg yolks<br />
                      3/4 cup granulated sugar<br />
                      1 cup mascarpone cheese<br />
                      1 1/2 cups heavy cream<br />
                      1 teaspoon vanilla extract<br />
                      1 1/2 cups strong brewed espresso<br />
                      24 to 30 ladyfinger cookies<br />
                      Unsweetened cocoa powder<br />
                      Dark chocolate
                  </p>
              </div>
          </aside>
      </section>
    </>
  );
}