<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Ticket;

class TicketController extends Controller
{
    function addTicket(Request $request){
        $ticket = new Ticket;
        $ticket->t_id = $request->input('T_ID');
        $ticket->cccd = $request->input('CCCD');
        $ticket->name = $request->input('Name');
        $ticket->fly_id = $request->input('Fly_ID');
        $ticket->kg_id = $request->input('Kg_ID');
        $ticket->seat_id = $request->input('Seat_ID');
        $ticket->food_id = $request->input('Food_ID');
        $ticket->ticket_price = $request->input('Ticket_Price');
        $ticket->mail = $request->input('Mail');
        $ticket->dis_id = $request->input('Dis_ID');
        $ticket->save();

        return $ticket;
    }

    function getTickets()
    {
        $tickets = Ticket::all();
         return response()->json($tickets);
    }
    function updateTicket(Request $request){
        
        try {
        // Validate the request data as needed
            $request->validate([
                'T_ID' => 'required',
                'CCCD' => 'required',
                'Name' => 'required',
                'Ticket_Price' => 'required',
                'Mail' => 'required'
            ]);

            // Find the Ticket by cId
            $ticket = Ticket::where('T_ID', $request->input('T_ID'))->first();

            if (!$ticket) {
                return response()->json(['error' => 'Ticket not found'], 404);
            }

            // Update Ticket data
            $ticket->CCCD = $request->input('CCCD');
            $ticket->Name = $request->input('Name');
            $ticket->Fly_ID = $request->input('Fly_ID');
            $ticket->Seat_ID = $request->input('Seat_ID');
            $ticket->Food_ID = $request->input('Food_ID');
            $ticket->Kg_ID = $request->input('Kg_ID');
            $ticket->Mail = $request->input('Mail');
            $ticket->Dis_ID = $request->input('Dis_ID');
            $ticket->Ticket_Price = $request->input('Ticket_Price');
            $ticket->save();

            return response()->json(['message' => 'Ticket updated successfully'], 200);
        } catch (\Exception $e) {
            // Handle exceptions
            return response()->json(($e->getMessage()), 500);
        }
    }


    function getTicketDetails(Request $request)
    {
        $selectedTickets = $request->input('tIds');

        // Chuyển chuỗi cIds thành mảng
        $selectedTicketIds = explode(',', $selectedTickets);

        // Lấy chi tiết của các khách hàng được chọn
        $TicketDetails = Ticket::whereIn('T_ID', $selectedTicketIds)->get();

        return response()->json($TicketDetails);
    }

    function deleteTicket($tId)
    {
        try {
            // Tìm khách hàng dựa trên C_ID
            $ticket = Ticket::where('T_ID', $tId)->first();

            if (!$ticket) {
                return response()->json(['error' => 'Ticket not found'], 404);
            }

            // Xóa khách hàng
            $ticket->delete();

            return response()->json(['message' => 'Ticket deleted successfully'], 200);
        } catch (\Exception $e) {
            // Xử lý lỗi
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    function searchTickets(Request $request)
    {
        try {
            $searchKeyword = $request->input('searchKeyword');

            if (empty($searchKeyword)) {
                return response()->json(['error' => 'Invalid search keyword'], 400);
            }

            // Search Tickets by name containing the provided keyword
            $searchResults = Ticket::where('Name', 'like', '%' . $searchKeyword . '%')
                ->orWhere('Ticket_Price', 'like', '%' . $searchKeyword . '%')
                ->orWhere('Dis_ID', 'like', '%' . $searchKeyword . '%')
                ->orWhere('T_ID', 'like', '%' . $searchKeyword . '%')
                ->get();

            return response()->json($searchResults);
        } catch (\Exception $ex) {
            return response()->json(['error' => 'Internal server error: ' . $ex->getMessage()], 500);
        }
    }



}
