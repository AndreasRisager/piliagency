import Link from "next/link";
import Layout from "../components/Layout";

export default function succes() {
	return (
		<Layout title="Tak!">
			<main className="text-center my-60">
				<h1 className="text-xl md:text-3xl mb-4">
					Tak vi har modtaget din besked!
				</h1>
				<Link
					href="/"
					className="inline-block text-lg text-white mr-0 py-2.5 px-10 rounded-lg bg-beige hover:bg-beigehover active:bg-beigehover focus:outline-none focus:ring focus:ring-black">
					Startside
				</Link>
			</main>
		</Layout>
	);
}
