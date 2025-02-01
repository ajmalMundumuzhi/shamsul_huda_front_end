export default function Facility (props) {
    return (
        <>
        <div class="relative flex flex-col md:flex-row w-full my-6 bg-white shadow-sm border border-slate-200 rounded-lg">
  <div class="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden">
    <img
      src={props?.url}
      alt="card-image"
      class="h-full w-full rounded-md md:rounded-lg object-cover"
    />
  </div>
  <div class="p-6">
    <div class="mb-4 rounded-full bg-teal-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">Facility</div>
    <h4 class="mb-5 mt-12 text-slate-950 text-4xl">
      {props?.title}
    </h4>
    <p class="mb-8 text-slate-600 leading-normal font-light">
    {props?.detail}
    </p>
  </div>
</div> 

        </>
    )
}