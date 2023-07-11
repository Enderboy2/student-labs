import Link from "next/link";
function Hero() {
  return (
    <section className="grid grid-cols-1 gap-3 pt-10 md:grid-cols-2 full-height-except-navbar">
      <div>
        <h1 className="text-primary">
          Manage your studies with our Time Management and Productivity Tracker
          website
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas maxime
          cumque recusandae, aliquam, culpa accusamus quae necessitatibus, totam
          quibusdam excepturi minus error. Culpa aspernatur impedit numquam
          dolores fuga labore? Magnam!
        </p>
        <div className="flex gap-3">
          <Link href="/register" className="btn btn-primary">
            Get Started NOW
          </Link>
        </div>
      </div>

      <div></div>
    </section>
  );
}

export default Hero;
