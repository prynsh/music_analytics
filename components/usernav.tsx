import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  import { Button } from "@/components/ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  
  export function UserNav() {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/avatars/01.png" alt="@shadcn" />
              <AvatarFallback>PV</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">Priyansh Verma</p>
              <p className="text-xs leading-none text-muted-foreground">
                1234@example.com
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem className="text-xs">
              Song Name
              <DropdownMenuShortcut>Fell for you</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Artist
              <DropdownMenuShortcut>Shubh</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Date Streamed
              <DropdownMenuShortcut>14-Feb-2025</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>Stream Count
            <DropdownMenuShortcut>340</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            UserID
            <DropdownMenuShortcut>9871</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }