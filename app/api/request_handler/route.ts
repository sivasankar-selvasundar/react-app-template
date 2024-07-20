import { getHandler } from "@/lib/handlers/handlerFactory";

export async function POST(request: Request) {
    const body = await request.json();

    const handler: IHandler | null = getHandler(body.dataSource);

    if(handler){
        const result = await handler.handleRequest(body);
        return Response.json(result);
    }else{
        return Response.json("Nothing");
    }

    
    
  }

  