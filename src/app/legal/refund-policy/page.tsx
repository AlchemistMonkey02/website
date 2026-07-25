export const metadata = {
  title: "Refund Policy | VenturesNodes",
  description: "Refund Policy for VenturesNodes startup consultancy.",
};

export default function RefundPolicy() {
  return (
    <main className="container-custom py-32 max-w-4xl">
      <h1 className="text-4xl font-bold font-heading mb-8">Refund Policy</h1>
      <div className="prose prose-slate max-w-none">
        <p>Last updated: June 2026</p>
        <h2>Consultation Services</h2>
        <p>Our initial assessments are completely free. For paid consultation services or document preparation fees, refunds are handled on a case-by-case basis.</p>
        <h2>Government Fees</h2>
        <p>Any fees paid directly to the government for registrations (e.g., MSME, Startup India) or third-party vendors are strictly non-refundable under any circumstances.</p>
        <h2>Service Cancellation</h2>
        <p>If you wish to cancel a service before any work has commenced, a full refund (minus any payment gateway charges) will be provided. Once work has begun or consultancy hours have been utilized, no refunds will be issued.</p>
      </div>
    </main>
  );
}
