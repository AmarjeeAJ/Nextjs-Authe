interface UserProfileProps {
    params: { id: string };
  }
  
  export default function UserProfile({ params }: UserProfileProps) {
    return (
      <div className="flex flex-col items-center justify-center h-screen py-2">
        <h1 className="text-center text-gray-700 text-4xl mb-4">
          Profile <span className="bg-orange-300 rounded-md w-full px-4 py-3">{params?.id}</span>
        </h1>
        <hr />
        <p>Profile page</p>
      </div>
    );
  }
  