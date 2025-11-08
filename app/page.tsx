import Portrait from '@/components/portrait';

export default function PortraitPage() {
  return (
    <div style={{ padding: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Portrait size={500} />
    </div>
  );
}