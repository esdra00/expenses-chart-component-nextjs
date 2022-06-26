import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Chart.module.css";
import Graph from "../component/graph";

export default function Home() {
	return (
		<>
			<Head>
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<meta name="author" content="Esdra Bergamasco" />
				<meta
					name="description"
					content="Expenses chart component by Esdra Bergamasco"
				/>
				<meta name="keywords" content="expenses,chart,lifestyle" />
				<meta name="theme-color" content="hsl(27, 66%, 92%)" />
				<meta name="robots" content="index, follow" />
				<title>Expenses Chart</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<div className={styles.cardContainer}>
					<header className={styles.balance}>
						<div>
							<span className={styles.titleSmall}>
								My balance
							</span>
							<h1>$921.48</h1>
						</div>
						<div className="icon">
							<Image
								src="/images/logo.svg" // Route of the image file
								height={50} // Desired size with correct aspect ratio
								width={50} // Desired size with correct aspect ratio
								alt="Your Name"
							/>
						</div>
					</header>
					<section className={styles.expenses}>
						<h2>Spending - Last 7 days</h2>
						<Graph />
						<div className={styles.totalContainer}>
							<div className={styles.totalCurrent}>
								<span className={styles.titleSmall}>
									Total this month
								</span>
								<h3>$478.33</h3>
							</div>
							<div className={styles.totalPrevious}>
								<h3>+2.4%</h3>
								<span className={styles.titleSmall}>
									from last mconth
								</span>
							</div>
						</div>
					</section>
				</div>
			</main>
		</>
	);
}
