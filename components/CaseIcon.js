export default function CaseIcon({ headline, subheadline }) {
	return (
		<div className="flex flex-col items-center justify-center text-center rounded-xl p-3">
			<h4 className="text-sm md:text-base uppercase font-medium  max-w-[215px]">
				{subheadline}
			</h4>
			<h3 className="text-lg md:text-3xl font-serif  max-w-[215px]">
				{headline}
			</h3>
		</div>
	);
}
