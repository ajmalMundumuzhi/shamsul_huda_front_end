import Managers from "../components/Managers";

function ManagementPage() {
  return (
    <div className="flex flex-wrap justify-center md:justify-start">
      <Managers
        Name="John Doe"
        Role="CEO"
        Profile="https://via.placeholder.com/150"
        Whatsapp="https://wa.me/1234567890"
        Email="mailto:johndoe@example.com"
      />
      <Managers
        Name="Jane Smith"
        Role="CTO"
        Profile="https://via.placeholder.com/150"
        Whatsapp="https://wa.me/9876543210"
        Email="mailto:janesmith@example.com"
      />
      <Managers
        Name="Alice Johnson"
        Role="CFO"
        Profile="https://via.placeholder.com/150"
        Whatsapp="https://wa.me/1122334455"
        Email="mailto:alice@example.com"
      />
      <Managers
        Name="Bob Williams"
        Role="COO"
        Profile="https://via.placeholder.com/150"
        Whatsapp="https://wa.me/9988776655"
        Email="mailto:bob@example.com"
      />
      <Managers
        Name="Charlie Brown"
        Role="Manager"
        Profile="https://via.placeholder.com/150"
        Whatsapp="https://wa.me/4433221100"
        Email="mailto:charlie@example.com"
      />
      <Managers
        Name="Emily Davis"
        Role="HR Head"
        Profile="https://via.placeholder.com/150"
        Whatsapp="https://wa.me/7766554433"
        Email="mailto:emily@example.com"
      />
    </div>
  );
}

export default ManagementPage;
